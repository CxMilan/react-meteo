import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/98761-catherine-milanetti"
            target="_blank"
            rel="noreferrer"
          >
            Cate Milan
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/CxMilan/react-meteo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-meteo-app-w6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
