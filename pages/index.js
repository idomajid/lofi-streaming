import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import styles from "../styles/Container.module.css";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Header />
      <div style={{ width: "100%", height: "100%" }}>
        <Image
          className="rounded-md"
          src="/../public/doctor-before.jpg"
          alt="Picture of the author"
          width="1500px"
          height="678px"
        />
        {/* <Link href="/streamingPage">
          <button className="px-24 py-3 bg-blue-500 rounded text-white font-medium">
            Go to streaming Page
          </button>
        </Link> */}
      </div>
    </div>
  );
}
