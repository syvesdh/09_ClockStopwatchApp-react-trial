import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/stopwatch">
        <button>Stopwatch</button>
      </Link>
      <Link to="/clock">
        <button>Clock</button>
      </Link>
    </>
  );
}
