import './styles.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CarCard from '../../components/CarCard';

const Catalog = () => {
  return (
      <div className="home-container">
        <div className="search-bar"><SearchBar /></div>
        <div className="container cards-box">
           <div className="row">
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
           </div>
        </div>
      </div>
  );
};

export default Catalog;
