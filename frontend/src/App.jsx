import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./comp/SignUp";
import Login from "./comp/Login";
import Home from "./comp/Home";
import Protected from "./comp/Protected";

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Protected"
            element={isLoggedIn() ? <Protected /> : <Navigate to="/login" />}
          />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
