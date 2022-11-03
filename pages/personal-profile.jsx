import Header from "../components/Header";
import styles from "../styles/Container.module.css";
import Profile from "../components/Profile";
import Head from "next/head";

export default function personalProfile() {
  return (
    <div>
      <Head>
        <title>Personal Page Profile</title>
      </Head>
      <div className={styles.container}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Profile />
      </div>
    </div>
  );
}
