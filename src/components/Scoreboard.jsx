import styles from "./scoreboard.module.css";

export default function Scoreboard() {
  return (
    <div className={styles.scoreboard}>
      <div>Human score</div>
      <div>Computer score</div>
    </div>
  );
}
