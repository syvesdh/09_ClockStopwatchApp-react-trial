import motivationImage from "../assets/motivation.png";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Hi! I'm Steven, I code this for fun. Welcome! ;)</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10vh",
        }}
      >
        <img
          src={motivationImage}
          style={{
            maxWidth: "60vw",
            filter: "brightness(50%)",
          }}
          alt="Motivation Image"
        />
      </div>
    </div>
  );
}

export default HomePage;
