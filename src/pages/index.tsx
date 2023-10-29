import { ConnectWallet, useAddress, useChain } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Sepolia } from "@thirdweb-dev/chains";

const Home: NextPage = () => {
  const address = useAddress();
  const chain = useChain();

  if (chain && chain.chainId !== Sepolia.chainId) {
    console.log("wallet address: ", address);
    console.log("chain name: ", chain.name);

    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Sepolia に切り替えてください⚠️</h1>
          <p>この dApp は Sepolia テストネットのみで動作します。</p>
          <p>ウォレットから接続中のネットワークを切り替えてください。</p>
        </main>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to FooBarDAO !!</h1>
          <p></p>
          <div className={styles.connect}>
            <ConnectWallet />
          </div>
        </main>
      </div>
    );
  }
};

export default Home;
