import { Link } from 'react-router-dom';
import './Home.scss';

type Props = {};
const Home = (props: Props) => {
  return (
    <div className='home'>
      <header>
        <h2 className='home-title'>Jouez au Memory Game sur le thème de Star Wars !</h2>
      </header>
      <main className='home-main'>
        <div className='home-title'>Nouvelle Partie ?</div>
        <Link to='/memory'>
          <button>Jouer</button>
        </Link>
      </main>
    </div>
  );
};
export default Home;
