import { useContext } from "react";
import FavoriteContext from "../../store/favoritesContext";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { totalFavorites } = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUp</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites {totalFavorites}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
