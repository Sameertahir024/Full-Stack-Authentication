import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/AuthSlice";
import { logout } from "../reducers/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear("token");
  };
  return (
    <div>
      <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        {JSON.stringify(userInfo)}
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
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Login;
