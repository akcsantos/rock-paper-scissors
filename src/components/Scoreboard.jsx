import styles from "./scoreboard.module.css";

export default function Scoreboard() {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.playerScoreboard}>
        <h2 className={styles.playerName}>Human Score</h2>
        <h2>0</h2>
      </div>
      <div className={styles.computerScoreboard}>
        <h2 className={styles.computerName}>Computer Score</h2>
        <h2>0</h2>
      </div>
    </div>
  );
}
