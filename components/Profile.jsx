import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import supabase from "../pages/api/supabase";

export default function Profile() {
  const [getUser, SetGetUser] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOb] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [profession, setProfession] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getTheUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        SetGetUser(user.user_metadata);
        setName(user.user_metadata.name);
        setSurname(user.user_metadata.surname);
        setEmail(user.user_metadata.email);
        setDOb(user.user_metadata.dob);
        setCountry(user.user_metadata.country);
        setCity(user.user_metadata.city);
        setFaculty(user.user_metadata.faculty);
        setProfession(user.user_metadata.profession);
      }
    };
    getTheUser();
  }, []);

  console.log({ getUser });
  if (!getUser) {
    return (
      <div className="text-2xl antialiased font-small py-5">
        You need to login in order to see your profile
      </div>
    );
  }
  return (
    <form className="w-1/2 flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col ">
        <div className="text-2xl antialiased font-small py-5">
          Personal information
        </div>

        <div>
          <div className="flex flex-col ">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              className=" indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <label className="text-sm" htmlFor="surname">
            Surname
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
            id="surname"
            type="text"
            placeholder="Surname"
            value={surname}
            disabled
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            disabled
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
            id="dob"
            type="text"
            placeholder="Date of Birth"
            value={dob}
            disabled
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm" htmlFor="country">
            Country
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
            id="country"
            type="text"
            placeholder="Country"
            value={country}
            disabled
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm" htmlFor="city">
            City
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
            id="city"
            type="text"
            placeholder="City"
            value={city}
            disabled
          />
        </div>
        {/* <div className="flex flex-col ">
          <label className="text-sm" htmlFor="faculty">
            Faculty/Institution
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded bg-gray-300 text-gray-500"
            id="faculty"
            type="text"
            placeholder="Faculty/Institution"
            value={faculty}
            disabled
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-sm" htmlFor="profession">
            Profession
          </label>
          <input
            className="indent-2 w-80 h-8 border-2 rounded  bg-gray-300 text-gray-500"
            id="profession"
            type="text"
            placeholder="Profession"
            value={profession}
            disabled
          />
        </div> */}
      </div>
    </form>
  );
}
