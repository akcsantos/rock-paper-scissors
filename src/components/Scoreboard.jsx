import styles from "./scoreboard.module.css";

export default function Scoreboard({ playerScore, computerScore, round }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.playerScoreboard}>
        <h2 className={styles.playerName}>Human Score</h2>
        <h2>{playerScore}</h2>
      </div>
      <div className={styles.round}>
        <h2>Round: </h2>
        <h2>{round}</h2>
      </div>
      <div className={styles.computerScoreboard}>
        <h2 className={styles.computerName}>Computer Score</h2>
        <h2>{computerScore}</h2>
      </div>
    </div>
  );
}
