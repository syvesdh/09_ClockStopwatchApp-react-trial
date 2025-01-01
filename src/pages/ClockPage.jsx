import DigitalClock from "../components/DigitalClock";
import "./ClockPage.css";

function ClockPage() {
  return (
    <div className="clock-page">
      <div className="clock-container">
        <div className="clock">
          <DigitalClock></DigitalClock>
        </div>
      </div>
    </div>
  );
}

export default ClockPage;
