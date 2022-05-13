import React from "react";

type Props = {
  title: string;
  price: string;
  change24h: number;
  volume24h: string;
  icon: any;
};

const styles = {
  wrapper:
    "flex flex-row justify-between items-center w-full border-b border-light4 py-3 my-1",
  info: "text-light1 font-thin w-[150px] text-sm flex flex-row",
  positive: "text-posGreen font-thin w-[150px] text-sm",
  negative: "text-negRed font-thin w-[150px] text-sm",
  icon: "w-5 mr-5",
};

const marketRow = ({ title, price, change24h, volume24h, icon }: Props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.info}>
        <img src={icon} alt="icon" className={styles.icon} />
        {title}
      </span>
      <span className={styles.info}>${price}</span>
      <span className={styles.positive}>{(change24h * 100).toFixed(2)}%</span>
      <span className={styles.info}>${volume24h}</span>
    </div>
  );
};

export default marketRow;
