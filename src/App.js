import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/KollerJacq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacqueline Koller
          </a>{" "}
          an is open-sourced on{" "}
          <a
            href="https://github.com/KollerJacq/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
