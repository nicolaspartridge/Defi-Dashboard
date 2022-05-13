import useFetch from "./hooks/useFetch";

const styles = {
  container: "flex justify-center items-center w-full",
  main: "max-w-2xl flex flex-col justify-center p-4 my-4 rounded-sm bg-gray-100",
};

function App() {
  const { data, loading } = useFetch("/btc");

  loading && <span>Loading...</span>;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span>Name: {data && data.name}</span>
        <span>Last: {data && data.last}</span>
        <span>Bid: {data && data.bid}</span>
        <span>Ask: {data && data.ask}</span>
        <span>Price: {data && data.price}</span>
        <span>Type: {data && data.type}</span>
        <span>Change1h: {data && data.change1h}</span>
        <span>Change24h: {data && data.change24h}</span>
        <span>Volume24h: {data && data.volumeUsd24h}</span>
        <span>High24h: {data && data.priceHigh24h}</span>
        <span>Low24h: {data && data.priceLow24h}</span>
      </div>
    </div>
  );
}

export default App;
