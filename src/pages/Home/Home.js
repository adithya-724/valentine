import React from "react";
import image from "../../assets/images/heart.gif";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.background}>
      <h1>Valentine's Day Special</h1>
      <img src={image} alt="" className={styles.image} />
      <button className={styles.btn} onClick={props.onClick}>
        Reveal
      </button>
    </div>
  );
};

export default Home;
