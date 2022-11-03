import React from "react";
import SignUpCard from "../components/SignUpCard";
import Header from "../components/Header";
import styles from "../styles/Container.module.css";
import Head from "next/head";

export default function Signup() {
  return (
    <div>
      <Head>
        <title>Create Account</title>
      </Head>
      <div className={styles.container}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <SignUpCard />
      </div>
    </div>
  );
}
