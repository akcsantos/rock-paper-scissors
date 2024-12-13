import styles from "./selected.module.css";

export default function Selected() {
  return (
    <div className={styles.selected}>
      <div className={styles.playerChoice}></div>
      <div className={styles.computerChoice}></div>
    </div>
  );
}
