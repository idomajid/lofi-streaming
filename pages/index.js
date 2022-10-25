import Image from "next/image";

import styles from "../styles/Container.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className="py-4 md:py-0">
        <Image
          className="rounded-md"
          src="/doctor.jpg"
          alt="Picture of the author"
          width="1500px"
          height="678px"
        />
      </div>
    </div>
  );
}
