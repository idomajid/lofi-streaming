import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Signup from "../components/SignUpCard";
import Login from "../components/LoginCard";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Home() {
  return (
    <div className={styles.container}>
      <button>Create Account page</button>
      <button>Login Page</button>
      <div>
        <h1>Youtube Embed</h1>
        <YoutubeEmbed embedId="jfKfPfyJRdk" />
      </div>
    </div>
  );
}
