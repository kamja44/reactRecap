import { useState, useEffect } from "react";
import styles from "./App.module.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const data = async () => {
      const api = await (
        await fetch("https://api.coinpaprika.com/v1/tickers")
      ).json();
      setLoading((loading) => false);
      await setCoins(api);
    };
    data();
  }, []);
  const onChange = (event) => {
    const { value } = event.target;
    setValue((data) => value);
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <h1>Coins {loading ? "" : `(${coins.length})`}</h1>
      <input
        className={styles.input}
        type="number"
        placeholder="My Money"
        onChange={onChange}
      ></input>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              USD
              {/* <span>
              You can buy {value / coin.quotes.USD.price} {coin.name}
            </span> */}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
