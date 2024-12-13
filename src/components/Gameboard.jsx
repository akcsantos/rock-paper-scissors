import { useState, useEffect } from "react";
import styles from "./gameboard.module.css";

export default function Gameboard({
  setPlayerDisplay,
  playerDisplay,
  computerDisplay,
  setComputerDisplay,
  setComputerSelected,
  setPlayerSelected,
  playerSelected,
  computerSelected,
  setWinner,
  setComputerScore,
  setPlayerScore,
  computerScore,
  playerScore,
}) {
  function playGame() {
    if (playerSelected === "" && computerSelected === "") {
    } else if (playerSelected === "rock" && computerSelected === "scissors") {
      setPlayerScore(playerScore + 1);
      setWinner("You have won! 🎉🎉🎉");
    } else if (playerSelected === "scissors" && computerSelected === "paper") {
      setPlayerScore(playerScore + 1);
      setWinner("You have won! 🎉🎉🎉");
    } else if (playerSelected === "paper" && computerSelected === "rock") {
      setPlayerScore(playerScore + 1);
      setWinner("You have won! 🎉🎉🎉");
    } else if (playerSelected === computerSelected) {
      setWinner("It's a tie! 🤯");
    } else {
      setWinner("You have lost! 😞");
      setComputerScore(computerScore + 1);
    }
  }
  function handleComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);

    if (randomChoice === 1) {
      setComputerDisplay(styles.rock);
      setComputerSelected("rock");
    } else if (randomChoice === 2) {
      setComputerDisplay(styles.paper);
      setComputerSelected("paper");
    } else {
      setComputerDisplay(styles.scissors);
      setComputerSelected("scissors");
    }
  }
  function handlePlayerChoice(e) {
    const targetValue = e.target.value;
    if (targetValue === "rock") {
      setPlayerDisplay(styles.rock);
      setPlayerSelected("rock");
    } else if (targetValue === "paper") {
      setPlayerDisplay(styles.paper);
      setPlayerSelected("paper");
    } else {
      setPlayerDisplay(styles.scissors);
      setPlayerSelected("scissors");
    }

    handleComputerChoice();
  }
  useEffect(() => {
    playGame();
  }, [playerSelected]);
  return (
    <div className={styles.gameboard}>
      <div className={styles.selected}>
        <div className={playerDisplay}></div>
        <div className={computerDisplay}></div>
      </div>

      <div className={styles.choices}>
        <button
          className={styles.rock}
          value={"rock"}
          onClick={handlePlayerChoice}
        />
        <button
          className={styles.paper}
          value={"paper"}
          onClick={handlePlayerChoice}
        />
        <button
          className={styles.scissors}
          value={"scissors"}
          onClick={handlePlayerChoice}
        />
      </div>
    </div>
  );
}
