import { useEffect, useState } from "react";
import supabase from "../pages/api/supabase";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState(null);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notification = toast.loading("Changing Password");

    try {
      // if the user doesn't have accesstoken
      if (!hash) {
        return toast.error("Sorry, Invalid token", {
          id: notification,
        });
      } else if (hash) {
        const hashArr = hash
          .substring(1)
          .split("&")
          .map((param) => param.split("="));

        let type;
        let accessToken;
        for (const [key, value] of hashArr) {
          if (key === "type") {
            type = value;
          } else if (key === "access_token") {
            accessToken = value;
          }
        }

        if (
          type !== "recovery" ||
          !accessToken ||
          typeof accessToken === "object"
        ) {
          toast.error("Invalid access token or type", {
            id: notification,
          });
          return;
        }

        //   now we will change the password
        const { error } = await supabase.auth.updateUser(accessToken, {
          password: password,
        });

        if (error) {
          toast.error(error.message, {
            id: notification,
          });
        } else if (!error) {
          toast.success("Password Changed", {
            id: notification,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Sorry Error occured", {
        id: notification,
      });
    }
  };

  return (
    <form
      className="w-1/2 flex flex-col items-center justify-center gap-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col ">
        <div className="text-2xl antialiased font-small py-5">
          Login into your Account
        </div>
        <label className="text-sm" htmlFor="email">
          New password
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="password"
          required
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button className="px-4 my-4 py-1 bg-blue-500 rounded text-white font-medium">
        Reset Password
      </button>
    </form>
  );
}
