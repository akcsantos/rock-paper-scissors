import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Winner from "./components/Winner";
import Selected from "./components/Selected";
import Choices from "./components/Choices";

function App() {
  return (
    <div>
      <Header />
      <Scoreboard />
      <Winner />
      <Selected />
      <Choices />
    </div>
  );
}

export default App;
