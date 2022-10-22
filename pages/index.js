import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import Signup from "../components/SignUpCard";
import Login from "../components/LoginCard";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href="/signup">
        <button>Create Account page</button>
      </Link>
      <Link href="/login">
        <button>Login Page</button>
      </Link>
      <div>
        <h1>Youtube Embed</h1>
        <YoutubeEmbed embedId="jfKfPfyJRdk" />
      </div>
    </div>
  );
}
