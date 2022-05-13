import { useState } from "react";
import useFetch from "./hooks/useFetch";
import MarketRow from "./components/marketRow";

// Import Icons
import BTC from "./images/btc.svg";
import ETH from "./images/eth.svg";
import SOL from "./images/sol.svg";
import AVAX from "./images/avax.svg";
import BNB from "./images/bnb.svg";
import FTT from "./images/ftt.svg";

const styles = {
  container: "flex justify-center items-center w-full bg-dark2",
  main: "max-w-3xl w-full flex flex-col justify-center p-4 my-4 rounded-sm",
  title: "text-3xl text-light2 mb-5",
  indicators:
    "text-sm text-light2 &:hover:text-light3 cursor-pointer w-[150px]",
  indicatorsSection:
    "flex flex-row justify-between items-center w-full border-b border-light4 pb-2",
  chooseMarketContainer: "flex flex-row w-full",
  chooseMarketButtonDefault:
    "w-[150px] border-b border-light4 cursor-pointer hover:opacity-70 text-light4 pb-2 mb-4 transition-all duration-300",
  chooseMarketButtonSelected:
    "w-[150px] border-b-2 font-bold border-primary cursor-pointer hover:opacity-70 text-primary pb-2 mb-4 transition-all duration-300",
};

function convertToK(num: number) {
  let temp = num.toFixed(0);
  return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function App() {
  const [showPerps, setShowPerps] = useState(true);

  // Perp market data
  const btcData = useFetch("/btc-perp");
  const ethData = useFetch("/eth-perp");
  const solData = useFetch("/sol-perp");
  const bnbData = useFetch("/bnb-perp");
  const fttData = useFetch("/ftt-perp");
  const avaxData = useFetch("/avax-perp");

  // Main market data
  const btcUsdData = useFetch("/btc-usd");
  const ethUsdData = useFetch("/eth-usd");
  const solUsdData = useFetch("/sol-usd");
  const bnbUsdData = useFetch("/bnb-usd");
  const fttUsdData = useFetch("/ftt-usd");
  const avaxUsdData = useFetch("/avax-usd");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Markets</h1>
        <div className={styles.chooseMarketContainer}>
          <button
            onClick={() => setShowPerps(true)}
            className={
              showPerps
                ? styles.chooseMarketButtonSelected
                : styles.chooseMarketButtonDefault
            }
          >
            Perp
          </button>
          <button
            onClick={() => setShowPerps(false)}
            className={
              showPerps
                ? styles.chooseMarketButtonDefault
                : styles.chooseMarketButtonSelected
            }
          >
            Spot
          </button>
        </div>
        <div className={styles.indicatorsSection}>
          <span className={styles.indicators}>Market</span>
          <span className={styles.indicators}>Price</span>
          <span className={styles.indicators}>24hr Change</span>
          <span className={styles.indicators}>24hr Volume [FTX]</span>
        </div>
        {showPerps ? (
          <>
            {btcData.data && (
              <MarketRow
                icon={BTC}
                title={btcData.data.name}
                price={btcData.data.price}
                change24h={btcData.data.change24h}
                volume24h={convertToK(btcData.data.volumeUsd24h)}
              />
            )}
            {ethData.data && (
              <MarketRow
                icon={ETH}
                title={ethData.data.name}
                price={ethData.data.price}
                change24h={ethData.data.change24h}
                volume24h={convertToK(ethData.data.volumeUsd24h)}
              />
            )}
            {solData.data && (
              <MarketRow
                icon={SOL}
                title={solData.data.name}
                price={solData.data.price}
                change24h={solData.data.change24h}
                volume24h={convertToK(solData.data.volumeUsd24h)}
              />
            )}
            {bnbData.data && (
              <MarketRow
                icon={BNB}
                title={bnbData.data.name}
                price={bnbData.data.price}
                change24h={bnbData.data.change24h}
                volume24h={convertToK(bnbData.data.volumeUsd24h)}
              />
            )}
            {fttData.data && (
              <MarketRow
                icon={FTT}
                title={fttData.data.name}
                price={fttData.data.price}
                change24h={fttData.data.change24h}
                volume24h={convertToK(fttData.data.volumeUsd24h)}
              />
            )}
            {avaxData.data && (
              <MarketRow
                icon={AVAX}
                title={avaxData.data.name}
                price={avaxData.data.price}
                change24h={avaxData.data.change24h}
                volume24h={convertToK(avaxData.data.volumeUsd24h)}
              />
            )}
          </>
        ) : (
          <>
            {btcUsdData.data && (
              <MarketRow
                icon={BTC}
                title={btcUsdData.data.name}
                price={btcUsdData.data.price}
                change24h={btcUsdData.data.change24h}
                volume24h={convertToK(btcUsdData.data.volumeUsd24h)}
              />
            )}
            {ethUsdData.data && (
              <MarketRow
                icon={ETH}
                title={ethUsdData.data.name}
                price={ethUsdData.data.price}
                change24h={ethUsdData.data.change24h}
                volume24h={convertToK(ethUsdData.data.volumeUsd24h)}
              />
            )}
            {solUsdData.data && (
              <MarketRow
                icon={SOL}
                title={solUsdData.data.name}
                price={solUsdData.data.price}
                change24h={solUsdData.data.change24h}
                volume24h={convertToK(solUsdData.data.volumeUsd24h)}
              />
            )}
            {bnbUsdData.data && (
              <MarketRow
                icon={BNB}
                title={bnbUsdData.data.name}
                price={bnbUsdData.data.price}
                change24h={bnbUsdData.data.change24h}
                volume24h={convertToK(bnbUsdData.data.volumeUsd24h)}
              />
            )}
            {fttUsdData.data && (
              <MarketRow
                icon={FTT}
                title={fttUsdData.data.name}
                price={fttUsdData.data.price}
                change24h={fttUsdData.data.change24h}
                volume24h={convertToK(fttUsdData.data.volumeUsd24h)}
              />
            )}
            {avaxUsdData.data && (
              <MarketRow
                icon={AVAX}
                title={avaxUsdData.data.name}
                price={avaxUsdData.data.price}
                change24h={avaxUsdData.data.change24h}
                volume24h={convertToK(avaxUsdData.data.volumeUsd24h)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
