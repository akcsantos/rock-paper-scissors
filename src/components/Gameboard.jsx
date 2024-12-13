import { useState } from "react";
import styles from "./gameboard.module.css";

export default function Gameboard({
  setPlayerSelected,
  playerSelected,
  computerSelected,
  setComputerSelected,
}) {
  function handlePlayerChoice(e) {
    const targetValue = e.target.value;
    if (targetValue === "rock") {
      setPlayerSelected(styles.rock);
    } else if (targetValue === "paper") {
      setPlayerSelected(styles.paper);
    } else {
      setPlayerSelected(styles.scissors);
    }

    handleComputerChoice();
  }

  function handleComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);

    if (randomChoice === 1) {
      setComputerSelected(styles.rock);
    } else if (randomChoice === 2) {
      setComputerSelected(styles.paper);
    } else {
      setComputerSelected(styles.scissors);
    }
  }

  return (
    <div className={styles.gameboard}>
      <div className={styles.selected}>
        <div className={playerSelected}></div>
        <div className={computerSelected}></div>
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
