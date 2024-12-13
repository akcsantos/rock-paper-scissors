import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Winner from "./components/Winner";
import Gameboard from "./components/Gameboard";

function App() {
  const [playerSelected, setPlayerSelected] = useState("");
  const [computerSelected, setComputerSelected] = useState("");

  return (
    <div>
      <Header />
      <Scoreboard />
      <Winner />
      <Gameboard
        setPlayerSelected={setPlayerSelected}
        playerSelected={playerSelected}
        computerSelected={computerSelected}
        setComputerSelected={setComputerSelected}
      />
    </div>
  );
}

export default App;
