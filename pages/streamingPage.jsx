import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import styles from "../styles/Container.module.css";
import Header from "../components/Header";

export default function streamingPage() {
  return (
    <div>
      <div className={styles.container}>
        <Header />

        <h1 className="text-7xl">Youtube Embed</h1>
        <YoutubeEmbed embedId="jfKfPfyJRdk" />
      </div>
    </div>
  );
}
