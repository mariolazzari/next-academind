import { createContext, useState } from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export const FavoritesProvider = props => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = fav => setUserFavorites(prev => [...prev, fav]);

  const removeFavoriteHandler = id =>
    setUserFavorites(prev => prev.filter(f => f.id !== id));

  const itemIsFavoriteHandler = id => userFavorites.some(m => m.id === id);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
