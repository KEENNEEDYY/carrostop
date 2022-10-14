import './styles.css';

const SearchBar = () => {
  return (
    <>
      <div className="home-card">
        <div className="search-box">
          
            <input className="search-box-text" type="text" value="Digite sua busca" />
            <button className="search-button">BUSCAR</button>
          
        </div>
      </div>
    </>
  );
};

export default SearchBar;
