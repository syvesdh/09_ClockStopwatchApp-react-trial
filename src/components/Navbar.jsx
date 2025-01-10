import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

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
      <button
        onClick={() => {
          navigate("/firebase");
        }}
      >
        Firebase-Trial-App
      </button>
    </>
  );
}
