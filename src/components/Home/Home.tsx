import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.scss';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='home'>
      <header>
        <h2 className='fs-1 text-danger'>Jouez au Memory Game sur le thème de Star Wars !</h2>
      </header>
      <main className='home-main'>
        <Link to='/memory'>
          <Button variant='primary'>Pret ?</Button>
        </Link>
      </main>
    </div>
  );
};
export default Home;
