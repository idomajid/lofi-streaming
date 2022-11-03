import Image from "next/image";

import styles from "../styles/Container.module.css";
import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>
      <Header />
      <div className="py-4 md:py-0">
        <Image
          className="rounded-md"
          src="/lofi-image.jpg"
          alt="Picture of the author"
          width="1500px"
          height="678px"
        />
      </div>
      <div className="flex justify-center">
        <div>
          <span>Photo by </span>
          <a
            className="font-medium"
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/@rpnickson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Roberto Nickson
          </a>
          <span> on </span>
          <a
            className="font-medium"
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/photos/quS7YOKdiXA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </div>
      </div>
    </div>
  );
}
