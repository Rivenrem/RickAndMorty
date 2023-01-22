import styles from "./locationsList.module.sass";
import { useSelector } from "react-redux";
import Location from "./Location";

export default function LocationsList() {
  const locations = useSelector((state) => state.locations.locations);

  return locations ? (
    <div className={styles["characters-list"]}>
      {locations.map((location) => {
        return <Location key={location.id} location={location} />;
      })}
    </div>
  ) : (
    <div> There are no locations</div>
  );
}
