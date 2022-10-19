import './Card.scss';
import { CardType } from '../../data/cards';
import backImg from '../../assets/images/imgBack.png';

type Props = {
  card: CardType;
  flipped: boolean;
  handleFlip: (arg0: CardType) => void;
  disableFlip: boolean;
};
const Card: React.FC<Props> = ({ card, handleFlip, flipped, disableFlip }): JSX.Element => {
  const handleClick = (): void => {
    if (disableFlip) return;
    handleFlip(card);
  };

  return (
    <div className='card-container'>
      {/* Si la carte est retournée, ajout de la classe "flipped", sinon, pas de classe */}
      <div className={flipped ? 'flipped' : ''}>
        <img className='card-front img-fluid' src={card.image} alt='' />
        <img className='card-back img-fluid' src={backImg} onClick={handleClick} alt='' />
      </div>
    </div>
  );
};
export default Card;
