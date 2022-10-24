import Header from "../components/Header";
import styles from "../styles/Container.module.css";
import Profile from "../components/Profile";

export default function personalProfile() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Profile />
      </div>
    </div>
  );
}
