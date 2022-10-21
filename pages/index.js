import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Signup from "../components/SignUp";

export default function Home() {
  return (
    <div>
      <Signup />
    </div>
  );
}
