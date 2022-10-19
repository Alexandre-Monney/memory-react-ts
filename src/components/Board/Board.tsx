// Styles
import './Board.scss';
// Import pour la modal de fin de jeu
import { Modal, Button } from 'react-bootstrap';
// Modules npm
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTimer } from 'use-timer';
// Fonction de création de mon tableau mélangé de cartes
import { CardType, newBoard } from '../../data/cards';

import Card from '../Card/Card';

// Durée de mon timer, et de mon setTimeout pour la fin du jeu
const durationTimer: number = 90;

const Board: React.FC = (): JSX.Element => {
  // Timer pour la durée du jeu
  const { time, start, pause, reset, status } = useTimer({
    initialTime: durationTimer,
    timerType: 'DECREMENTAL',
  });
  // Récupération de mon tableau de cartes mélangées
  const cards: Array<CardType> = newBoard();

  const [boardCards, setBoardCards] = useState<any[] | Array<CardType>>([]);
  const [firstCardFlipped, setFirstCardFlipped] = useState<null | CardType>(null);
  const [secondCardFlipped, setSecondCardFlipped] = useState<null | CardType>(null);
  const [disableFlip, setDisableFlip] = useState<boolean>(false);
  const [matchedCard, setMatchedCard] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [counter, setCounter] = useState<number>(1);

  // Initialisation de mon plateau de jeu
  const newGame = (): void => {
    // Demarrage du Timer
    start();
    // je mets mon tableau de cartes mélangées dans le state
    setBoardCards(cards);

    // Je n'ai pas trouvé, comment déclencher une fonction a la fin de mon timer.
    // Solution moins "propre", mais qui fonctionne cependant
    setTimeout(() => {
      pause();
      setOpenModal(true);
      setModalMessage('Aie ! Temps expiré, dommage');
    }, durationTimer * 1000);
  };

  // Fonction pour vérifier si la partie est gagnée, et si c'est le cas, affichage de la modale avec le message
  const isGameWon = (): void => {
    if (matchedCard === 6) {
      pause();
      setModalMessage(`Bravo tu as gagné en ${counter} coups, et te restait ${time} secondes`);
      setOpenModal(true);
    }
  };

  // Fonction qui reinitialise les etats des deux cartes retournées, si elles n'ont pas match
  const resetFlippedCard = (): void => {
    setTimeout(() => {
      setFirstCardFlipped(null);
      setSecondCardFlipped(null);
      setDisableFlip(false);
    }, 1000);
  };

  // Je modifie la propriété matched a true, pour les cartes qui ont matchs, et je les retourne dans le state du board
  const updateMatchedCards = (): void => {
    setBoardCards((prev) => {
      return prev.map((card) => {
        if (card.name === firstCardFlipped?.name) {
          return { ...card, matched: true };
        } else {
          return card;
        }
      });
    });
  };

  // Component Did Mount pour initialisation de la partie
  useEffect(() => {
    newGame();
  }, []);

  // Component Did Update pour vérification si les deux cartes ont été retournées,
  // si elles sont de paires ou pas. Si c'est le cas, j'incrémente le compteur des cartes trouvées
  // Je test si elles ont toutes été trouvées, et ensuite je reset les states des cartes retournées
  useEffect(() => {
    if (firstCardFlipped && secondCardFlipped) {
      setCounter((prev) => prev + 1);
      setDisableFlip(true);
      console.log(counter);
      if (firstCardFlipped.name === secondCardFlipped.name) {
        setMatchedCard((prev) => prev + 1);

        resetFlippedCard();
        isGameWon();
        updateMatchedCards();
      } else {
        resetFlippedCard();
      }
    }
  }, [firstCardFlipped, secondCardFlipped]);

  // Fonction qui set le state soit de la 1ere carte retournée, soit de la 2nde selon si la 1ere existe ou non
  const handleFlip = (card: CardType): void => {
    firstCardFlipped ? setSecondCardFlipped(card) : setFirstCardFlipped(card);
  };

  return (
    <>
      <div className='board container-md-fluid'>
        <div className='row row-cols-4 justify-content-center'>
          {/* Je map pour avoir autant de carte, qu'il y en a dans mon tableau de cartes */}
          {boardCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleFlip={handleFlip}
              // Triple condition pour avoir le statut de carte retournée, soit c'est la premiere carte cliquéé
              // Soit c'est la seconde carte cliquée
              // Et enfin, si la propriété de la carte "matched" est a true
              flipped={card === firstCardFlipped || card === secondCardFlipped || card.matched}
              disableFlip={disableFlip}
            />
          ))}
        </div>
      </div>
      {/* Affichage du temps restant grace au timer */}
      <p className='timer'>Temps Restant : {time}</p>
      {/* Boite de dialogue indiquant la fin de la partie, soit par victoire, soit par temps expiré */}
      <Modal centered show={openModal}>
        <Modal.Header>{modalMessage}</Modal.Header>
        <Modal.Footer>
          <Link to='/'>
            <Button variant='primary'>Rejouer ?</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Board;
