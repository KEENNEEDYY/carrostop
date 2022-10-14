import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="top-container">
          <MainImage />
          <div className='top-container-text'>
            <h4>O carro perfeito para você</h4>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
        </div>

        <div className="button-container">
          <Link to="/catalog"><button>Ver Catálogo</button></Link>
            
                    
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
