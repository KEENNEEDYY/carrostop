import './assets/styles/custom.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Catalog />
    </>
  );
}

export default App;
