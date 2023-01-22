import styles from "./homePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCharacters } from "../store/charactersSlice";
import { useCallback } from "react";
import icon from "../svg/icons8-морти-смит-400.svg";

export default function HomePage() {
  const navigate = useCallback(useNavigate(), []);
  const dispatch = useDispatch();

  return (
    <div className={styles["home-page"]}>
      <img src={icon} alt="icon" className={styles["home-page__icon"]}></img>
      <p className={styles["home-page__paragraph"]}>
        Welcome to the Rick and Morty universe, <br /> what do you want to see ?
      </p>
      <div className={styles["home-page__nav"]}>
        <div
          onClick={() => {
            dispatch(fetchCharacters());
            navigate({
              pathname: "/charactersList",
            });
          }}
          className={styles["home-page__nav__characters"]}
        >
          <p>Show me characters !</p>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "fetchLocations" });
            navigate({
              pathname: "/locationsList",
            });
          }}
          className={styles["home-page__nav__locations"]}
        >
          <p>Show me locations !</p>
        </div>
      </div>
    </div>
  );
}
