import React from "react";
import LoginCard from "../components/LoginCard";
import Header from "../components/Header";
import styles from "../styles/Container.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Header />
      <LoginCard />
    </div>
  );
}
