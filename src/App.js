import "./App.css";
import PRODUCTS from "./MOCK_DATA.json";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [productSearch, setProductSearch] = useState("");

  return (
    <div className="App">
      <header className="header">
        <span className="header__title">FOOD4U</span>
        <div className="header__searchbar">
          <div className="icon-container">
            <FaSearch class="icon" />
          </div>
          <form
            className="header__search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                e.preventDefault();
                setProductSearch(e.target.value);
              }}
            ></input>
          </form>
        </div>
      </header>
      <main className="items">
        {PRODUCTS.filter((val) => {
          if (productSearch === "") {
            return val;
          } else if (
            val.item.toLowerCase().includes(productSearch.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="product" key={key}>
              <img src={val.image} alt={val.item} />
              <div className="info__container">
                <div>
                  <span className="info__price">${val.price}</span>
                </div>
                <div>
                  <span className="info__item">{val.item}</span>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      <footer className="footer">
        <span className="footer__text">
          This project was done as a part of the WebDev challenges Discord by
          StanLachie <br />
          Join in on the challenges @{" "}
          <a href="discord.gg/eayukvGydW">discord.gg/eayukvGydW</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
