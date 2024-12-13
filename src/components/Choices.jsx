import styles from "./choices.module.css";
import Circles from "./Circles";

export default function Choices() {
  return (
    <div className={styles.choices}>
      <Circles />
      <Circles />
      <Circles />
    </div>
  );
}
