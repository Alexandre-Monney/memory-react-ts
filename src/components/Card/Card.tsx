import './Card.scss';
import { CardType } from '../../data/cards';
import backImg from '../../assets/images/imgBack.png';

type Props = {
  card: CardType;
  handleFlip: (card: CardType) => null;
};
const Card: React.FC<Props> = ({ card, handleFlip, flipped, disableFlip }) => {
  const handleClick = () => {
    if (disableFlip) return;
    handleFlip(card);
  };

  return (
    <div className='card'>
      {/* Si la carte est retournée, ajout de la classe "flipped", sinon, pas de classe */}
      <div className={flipped ? 'flipped' : ''}>
        <img className='card-front' src={card.image} alt='' />
        <img className='card-back' src={backImg} onClick={handleClick} alt='' />
      </div>
    </div>
  );
};
export default Card;
