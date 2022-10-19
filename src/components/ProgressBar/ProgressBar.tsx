import './ProgressBar.scss';
import { useEffect, useState } from 'react';
import useProgress from './useProgress';

type Props = {
  ended: boolean;
};

const ProgressBar: React.FC<Props> = ({ ended }): JSX.Element => {
  // Je set la width de ma barre de progression
  const width = 75;

  // Utilisation d'un Hook Custom, trouvé sur internet pour la progression de ma barre timée
  const progress: number = useProgress();
  const [fixedProgress, setFixedProgress] = useState<number>(0);

  useEffect(() => {
    // Des que la partie s'arette, la valeur de fixedProgress n'évolue plus, et est utilisée pour figer la barre de progression
    if (!ended) {
      setFixedProgress(progress);
    }
  }, [progress]);

  return (
    <>
      <div className='progress-div' style={{ width: `${width}vw`, margin: 'auto' }}>
        <div
          className='progress-bar-percent'
          style={{ width: ended ? `${fixedProgress}%` : `${progress}%` }}
        ></div>
      </div>
    </>
  );
};
export default ProgressBar;
