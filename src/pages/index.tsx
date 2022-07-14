import type { NextPage } from "next";
import Image from "next/image";
import Seo from "@/components/Seo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo templateTitle="Home" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://web3philippines.org">Web3 Philippines Directory!</a>
        </h1>
        <p className={styles.description}>Currently, under development! 🙏</p>
      </main>

    </div>
  );
};

export default Home;
