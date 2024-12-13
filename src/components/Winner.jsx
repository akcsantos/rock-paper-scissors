import styles from "./winner.module.css";

export default function Winner({ winner }) {
  return <h2 className={styles.winner}>{winner}</h2>;
}
