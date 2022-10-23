import React from "react";
import SignUpCard from "../components/SignUpCard";
import Header from "../components/Header";
import styles from "../styles/Container.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <Header />
      <SignUpCard />
    </div>
  );
}
