import { useState, useEffect } from "react";
import supabase from "../pages/api/supabase";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ForgetPasswordCard() {
  const [email, setEmail] = useState("");

  const [formError, setFormError] = useState(null);

  const onResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setFormError("Please input the correctly ");
      return;
    }
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (data) {
      return toast.success("check your email");
    }
    if (error) {
      return console.log(error);
    }
  };

  // if (!fetchDataUser) {
  //   return <div>loading!!!!</div>;
  // }
  return (
    <form
      className="w-1/2 flex flex-col items-center justify-center gap-2"
      onSubmit={onResetPassword}
    >
      <div className="flex flex-col ">
        <div className="text-2xl antialiased font-small py-5">
          Login into your Account
        </div>
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <button className="px-4 my-4 py-1 bg-blue-500 rounded text-white font-medium">
        Reset Password
      </button>

      {formError && <p className="error">{formError}</p>}
    </form>
  );
}
