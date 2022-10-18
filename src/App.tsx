import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Board from './components/Board/Board';
import Home from './components/Home/Home';

function App() {
  return (
    <div id='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/memory' element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
