import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import supabase from "../pages/api/supabase";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const [fetchDataUser, setFetchDataUser] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const getUserLogin = async () => {
      const {
        data: { user, error },
      } = await supabase.auth.getUser();

      if (user) {
        setFetchDataUser(user?.user_metadata);
      }

      console.log({ user });
    };
    getUserLogin();
  }, []);

  const OnLogin = async (e) => {
    e.preventDefault();
    if ((!email, !password)) {
      setFormError("Please input the correctly ");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setFormError("Please input the correctly");
      console.log(error);
    }

    if (data) {
      console.log({ data });
      setFormError(null);
      router.push("/");
    }
  };

  console.log({ fetchDataUser });

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
          className="indent-2 w-80 h-8 border-2 rounded border-grey-800"
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="password">
          Password
        </label>
        <input
          className="indent-2 w-80 h-8 border-2 rounded border-grey-800"
          id="password"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      {/* <div>
        <Link href="/forgetPassword">
          <a>forgot password</a>
        </Link>
      </div> */}

      <button className="px-4 my-4 py-1 bg-blue-500 rounded text-white font-medium">
        Login
      </button>

      {formError && <p className="error">{formError}</p>}
    </form>
  );
}
