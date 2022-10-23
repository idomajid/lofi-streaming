import { useState, useEffect } from "react";
import supabase from "../pages/api/supabase";
import Link from "next/link";

export default function ForgetPasswordCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const [fetchDataUser, setFetchDataUser] = useState(null);

  const OnLogin = async (e) => {
    e.preventDefault();
    if ((!email, !password)) {
      setFormError("Please input the correctly ");
      return;
    }
  };

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(`${error} from signOut`);
    }
  };

  console.log(fetchDataUser);

  // if (!fetchDataUser) {
  //   return <div>loading!!!!</div>;
  // }
  return (
    <form
      className="w-1/2 flex flex-col items-center justify-center gap-2"
      onSubmit={OnLogin}
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
        Login
      </button>

      {formError && <p className="error">{formError}</p>}
    </form>
  );
}
