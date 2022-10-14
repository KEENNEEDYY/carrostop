import './styles.css';
import { ReactComponent as CarImg } from 'assets/images/car-catalog.svg';

const CarCard = () => {
  return (
    <>
      <div className="base-card">
        <div className="car-img">
          <CarImg />
        </div>
        <div className="top-text-container">
          <h4>Audi Supra TT</h4>
          <p>
            O TTS Cupê pertence a marca alemã Audi. O modelo é equipado com
            motor 2.0 TFSI de 286 cavalos
          </p>
          </div>
          <button className="btn-base-card">COMPRAR</button>
      </div>
    </>
  );
};

export default CarCard;
