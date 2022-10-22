import React, { useState } from "react";

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

    // const { data: products, error } = await supabase
    //   .from("profiles")
    //   .insert([
    //     {
    //       name,
    //       surname,
    //       email,
    //       dob,
    //       country,
    //       city,
    //       faculty,
    //       profession,

    //     },
    //   ])
    //   .select();

    if (error) {
      setFormError("Please input the correctly ");
      console.log(error);
    }

    if (data) {
      console.log({ data });
      setFormError(null);
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log({ user });
  };

  return (
    <form onSubmit={CreateUser}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="text"
          placeholder="Date of Birth"
          onChange={(e) => setDOb(e.target.value)}
          value={dob}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </div>
      <div>
        <label htmlFor="faculty">Faculty/Institution</label>
        <input
          id="faculty"
          type="text"
          placeholder="Faculty/Institution"
          onChange={(e) => setFaculty(e.target.value)}
          value={faculty}
        />
      </div>
      <div>
        <label htmlFor="profession">Profession</label>
        <input
          id="profession"
          type="text"
          placeholder="Profession"
          onChange={(e) => setProfession(e.target.value)}
          value={profession}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
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
      <button>Submit</button>
    </form>
  );
}
