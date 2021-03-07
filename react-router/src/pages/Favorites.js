import { useContext } from "react";
import FavoriteContext from "../store/favoritesContext";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const { favorites, totalFavorites } = useContext(FavoriteContext);

  return (
    <section>
      <h1>Favorites</h1>
      {totalFavorites === 0 && <p>No favorites yet..</p>}
      {totalFavorites > 0 && <MeetupList meetups={favorites} />}
    </section>
  );
};

export default Favorites;
