import React from "react";
import Link from "next/link";
import supabase from "../pages/api/supabase";

export default function Header() {
  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(`${error} from signOut`);
    }
  };

  return (
    <div className="flex md:flex-row h-24 justify-between  items-center flex-col ">
      <div className="text-3xl antialiased font-medium">
        <Link href="/">Urologi Conference</Link>
      </div>
      <div className="flex flex-column gap-3">
        <Link href="/signup">
          <button className="px-4 py-1 bg-blue-500 rounded">
            <p className="text-white   font-medium text-xs lg:text-base md:text-base">
              Create Account
            </p>
          </button>
        </Link>
        <Link href="/login">
          <button className="px-4 py-1 bg-blue-500 rounded text-white font-medium text-xs sm:text-base">
            Login
          </button>
        </Link>
        <Link href="/streamingPage">
          <button className="px-4 py-1 bg-gray-300 rounded text-white font-medium text-xs sm:text-base">
            Go to Streaming page
          </button>
        </Link>
      </div>
    </div>
  );
}
