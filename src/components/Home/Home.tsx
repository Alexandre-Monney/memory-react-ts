import { Link } from 'react-router-dom';
import './Home.scss';
import { Button } from 'react-bootstrap';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='home'>
      <header>
        <h2 className='fs-1 text-danger'>Jouez au Memory Game sur le thème de Star Wars !</h2>
      </header>
      <main className='home-main'>
        <div className='fs-3 text-primary'>Nouvelle Partie ?</div>
        <Link to='/memory'>
          <Button variant='primary'>Jouer</Button>
        </Link>
      </main>
    </div>
  );
};
export default Home;
