import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../reducers/AuthSlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, userInfo } = useSelector((state) => state.auth);

  const handleSignup = () => {
    dispatch(registerUser({ name, email, password }));
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      {JSON.stringify(userInfo)}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Register</button>
    </div>
  );
};

export default SignUp;
