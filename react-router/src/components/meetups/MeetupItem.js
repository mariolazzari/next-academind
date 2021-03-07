import { useContext } from "react";
import FavoriteContext from "../../store/favoritesContext";
import Card from "../../components/ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = props => {
  const { itemIsFavorite, removeFavorite, addFavorite } = useContext(
    FavoriteContext
  );

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite(props.id)) {
      removeFavorite(props.id);
    } else {
      const { id, title, address, description, image } = props;
      addFavorite({ id, title, address, description, image });
    }
  };

  return (
    <li>
      <Card>
        <div className={classes.item}>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite(props.id) ? "Remove Favs" : "To Favs"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
