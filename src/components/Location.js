import styles from "./location.module.scss";

export default function Location({ location }) {
  return (
    <div className={styles["location"]}>
      <p className={styles["location__name"]}>{"Name: " + location.name}</p>
      <p className={styles["location__dimension"]}>
        {"dimension: " + location.dimension}
      </p>
      <p className={styles["location__type"]}>{"Type: " + location.type}</p>
    </div>
  );
}
