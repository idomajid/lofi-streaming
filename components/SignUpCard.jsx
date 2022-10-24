import React, { useState } from "react";
import { useRouter } from "next/router";
import supabase from "../pages/api/supabase";

export default function SignUpCard({ session }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOb] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [profession, setProfession] = useState("Urologi");
  const [password, setPassword] = useState("");

  //   const [verifPassword, setVerifPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const router = useRouter();
  const CreateUser = async (e) => {
    e.preventDefault();
    if (
      (!name,
      !surname,
      !email,
      !dob,
      !country,
      !city,
      !faculty,
      !profession,
      !password)
      //   !verifPassword)
    ) {
      setFormError("Please input the correctly ");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
          surname: surname,
          email: email,
          dob: dob,
          country: country,
          city: city,
          faculty: faculty,
          profession: profession,
        },
      },
    });

    if (error) {
      setFormError("Please input the correctly ");
      console.log(error);
    }

    if (data) {
      console.log({ data });
      setFormError(null);
      router.push("/login");
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log({ user });
  };

  return (
    <form
      className="w-1/2 flex flex-col items-center justify-center gap-2"
      onSubmit={CreateUser}
    >
      <div className="flex flex-col ">
        <div className="text-2xl antialiased font-small py-5">
          Create an account
        </div>
        <label className="text-sm" htmlFor="name">
          Name
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="surname">
          Surname
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="surname"
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />
      </div>
      <div className="flex flex-col ">
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
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="dob">
          Date of Birth
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="dob"
          type="text"
          placeholder="Date of Birth"
          onChange={(e) => setDOb(e.target.value)}
          value={dob}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="country">
          Country
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="country"
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="city">
          City
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="city"
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="faculty">
          Faculty/Institution
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="faculty"
          type="text"
          placeholder="Faculty/Institution"
          onChange={(e) => setFaculty(e.target.value)}
          value={faculty}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="profession">
          Profession
        </label>
        <input
          className="w-80 h-8 border-2 rounded border-grey-800"
          id="profession"
          type="text"
          placeholder="Profession"
          onChange={(e) => setProfession(e.target.value)}
          value={profession}
        />
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="password">
          Password
        </label>
        <input
          className="w-80 h-8 b=2 border-2 rounded border-grey-800"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      {/* <div>
        <label htmlFor="pass-verif">Verification Password</label>
        <input
          id="pass-verif"
          type="password"
          placeholder="Verification password"
          onChange={(e) => setVerifPassword(e.target.value)}
          value={verifPassword}
        />
      </div> */}
      {formError && <p className="error">{formError}</p>}
      <button className="px-4 my-4 py-1 bg-blue-500 rounded text-white font-medium">
        Create an account
      </button>
    </form>
  );
}
