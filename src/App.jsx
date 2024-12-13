import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Winner from "./components/Winner";
import Gameboard from "./components/Gameboard";

function App() {
  const [playerDisplay, setPlayerDisplay] = useState("");
  const [computerDisplay, setComputerDisplay] = useState("");
  const [playerSelected, setPlayerSelected] = useState("");
  const [computerSelected, setComputerSelected] = useState("");
  const [winner, setWinner] = useState("Let's see what you got");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(0);

  return (
    <div>
      <Header />
      <Scoreboard
        playerScore={playerScore}
        computerScore={computerScore}
        round={round}
      />
      <Winner winner={winner} />
      <Gameboard
        setPlayerDisplay={setPlayerDisplay}
        playerDisplay={playerDisplay}
        computerDisplay={computerDisplay}
        setComputerDisplay={setComputerDisplay}
        setComputerSelected={setComputerSelected}
        setPlayerSelected={setPlayerSelected}
        playerSelected={playerSelected}
        computerSelected={computerSelected}
        setWinner={setWinner}
        setPlayerScore={setPlayerScore}
        setComputerScore={setComputerScore}
        playerScore={playerScore}
        computerScore={computerScore}
        round={round}
        setRound={setRound}
      />
    </div>
  );
}

export default App;
