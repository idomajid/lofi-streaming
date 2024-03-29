import React from "react";
import LoginCard from "../components/LoginCard";
import Header from "../components/Header";
import styles from "../styles/Container.module.css";
import Head from "next/head";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center   ">
        <LoginCard />
      </div>
    </div>
  );
}
