import styles from "./character.module.scss";

export default function Character({ character }) {
  return (
    <div className={styles["character"]}>
      <div className={styles["character__photo"]}>
        <img
          className={styles["character__photo__img"]}
          src={character.image}
          alt="characterImage"
        ></img>
      </div>
      <div className={styles["character__about"]}>
        <h2 className={styles["character__about__name"]}>{character.name}</h2>
        <h2 className={styles["character__about__status"]}>
          {character.status}
        </h2>
      </div>
    </div>
  );
}
