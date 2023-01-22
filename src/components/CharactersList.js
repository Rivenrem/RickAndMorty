import styles from "./charactersList.module.scss";
import { useSelector } from "react-redux";
import Character from "./Character";

export default function CharactersList() {
  const characters = useSelector((state) => state.characters.characters);

  return characters ? (
    <div className={styles["characters-list"]}>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  ) : (
    <div> There are no characters</div>
  );
}
