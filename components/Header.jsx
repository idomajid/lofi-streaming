import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between h-24 items-center ">
      <div className="text-3xl antialiased font-medium">
        <Link href="/">Urologi Conference</Link>
      </div>
      <div className="flex flex-column gap-3">
        <Link href="/signup">
          <button className="px-4 py-1 bg-blue-500 rounded text-white font-medium">
            Create Account
          </button>
        </Link>
        <Link href="/login">
          <button className="px-4 py-1 bg-blue-500 rounded text-white font-medium">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
