import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">signup</Link>
        </li>
        <li>
          <Link to="/Protected">Login first</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
