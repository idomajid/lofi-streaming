import { useState, useEffect } from "react";
import supabase from "../pages/api/supabase";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const [fetchDataUser, setFetchDataUser] = useState();

  useEffect(() => {
    const getUserLogin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setFetchDataUser(user.user_metadata);

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
    }
  };

  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(`${error} from signOut`);
    }
  };

  console.log(fetchDataUser);

  if (!fetchDataUser) {
    return <div>loading!!!!</div>;
  }
  return (
    <div>
      <form onSubmit={OnLogin}>
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
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {!fetchDataUser ? (
          <button>Login</button>
        ) : (
          <button onClick={onSignOut}>Log out</button>
        )}
        {formError && <p className="error">{formError}</p>}
      </form>
      <div>
        <ul>
          <li>{fetchDataUser.city}</li>
          <li>{fetchDataUser.country}</li>
          <li>{fetchDataUser.email}</li>
          <li>{fetchDataUser.faculty}</li>
          <li>{fetchDataUser.name}</li>
          <li>{fetchDataUser.profession}</li>
        </ul>
      </div>
    </div>
  );
}
