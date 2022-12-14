import './Card.scss';
import { CardType } from '../../data/cards';
import backImg from '../../assets/images/imgBack.png';

type Props = {
  card: CardType;
  flipped: boolean;
  handleFlip: (arg0: CardType) => void;
  disableFlip: boolean;
};
export const Card: React.FC<Props> = ({ card, handleFlip, flipped, disableFlip }): JSX.Element => {
  const handleClick = (): void => {
    if (disableFlip) return;
    handleFlip(card);
  };

  return (
    // Si la carte est cliquée et/ou qu'elle a match, ajout de la classe "flipped"
    <div className={(flipped ? 'flipped ' : '') + 'card-container container-fluid'}>
      <img className='card-front img-fluid' src={card.image} alt='' />
      <img className='card-back img-fluid' src={backImg} onClick={handleClick} alt='' />
    </div>
  );
};
export default Card;
