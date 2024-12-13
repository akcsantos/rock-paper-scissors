import styles from "./choices.module.css";

export default function Choices() {
  return (
    <div className={styles.choices}>
      <div className={styles.rock} />
      <div className={styles.paper} />
      <div className={styles.scissors} />
    </div>
  );
}
