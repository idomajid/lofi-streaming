/* eslint-disable react-hooks/rules-of-hooks */
import supabase from "./api/supabase";
import React, { useState, useEffect } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import styles from "../styles/Container.module.css";
import Header from "../components/Header";
import RealtimeSchedule from "../components/RealtimeSchedule";
import { useRouter } from "next/router";

export default function streamingPage() {
  const [getUser, SetGetUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const getTheUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        SetGetUser(user);
        console.log({ user });
      }
    };
    getTheUser();
  }, []);

  console.log({ getUser });

  if (!getUser) {
    return (
      <div className={styles.container}>
        <div>
          <Header />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-xl antialiased font-small py-5">
            You need to login
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-xl antialiased font-small py-5">
          This is a live-streaming video
        </p>
        <YoutubeEmbed embedId="jfKfPfyJRdk" />
      </div>
      <div className="flex flex-col items-center justify-center my-6 ">
        <p className="text-2xl antialiased font-small py-5">Schedule Event</p>
        <RealtimeSchedule />
      </div>
    </div>
  );
}
