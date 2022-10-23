import React from "react";
import ForgetPassword from "../components/ForgetPasswordCard";
import Header from "../components/Header";
import styles from "../styles/Container.module.css";

export default function forgetPassword() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <ForgetPassword />
      </div>
    </div>
  );
}
