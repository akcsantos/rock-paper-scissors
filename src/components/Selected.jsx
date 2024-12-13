import Circles from "./Circles";
import styles from "./selected.module.css";

export default function Selected() {
  return (
    <div className={styles.selected}>
      <Circles />
      <Circles />
    </div>
  );
}
