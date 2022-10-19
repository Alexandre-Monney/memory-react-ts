import card1 from '../assets/images/img1.png';
import card2 from '../assets/images/img2.png';
import card3 from '../assets/images/img3.png';
import card4 from '../assets/images/img4.png';
import card5 from '../assets/images/img5.png';
import card6 from '../assets/images/img6.png';

import shuffleArray from '../utils/shuffle';

export interface CardType {
  image: string;
  matched: boolean;
  name: string;
}

const originalCards: Array<CardType> = [
  {
    image: card1,
    matched: false,
    name: 'bb8',
  },
  {
    image: card2,
    matched: false,
    name: 'r2d2',
  },
  {
    image: card3,
    matched: false,
    name: 'chewbacca',
  },
  {
    image: card4,
    matched: false,
    name: 'anakin',
  },
  {
    image: card5,
    matched: false,
    name: 'yoda',
  },
  {
    image: card6,
    matched: false,
    name: 'vador',
  },
];

const board: Array<CardType> = [...originalCards, ...originalCards];

export const newBoard = (array: Array<CardType> = board): any[] => {
  const shuffledBoard = shuffleArray(array);
  return shuffledBoard.map((card, index) => ({
    id: index + 1,
    ...card,
  }));
};
