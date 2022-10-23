import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import styles from "../styles/Container.module.css";
import Header from "../components/Header";

export default function streamingPage() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-2xl antialiased font-small py-5">
          This is a live-streaming video
        </p>
        <YoutubeEmbed embedId="jfKfPfyJRdk" />
      </div>
    </div>
  );
}
