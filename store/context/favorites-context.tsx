import React, {ReactNode, createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [] as string[],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

type PropsType = {
  children: ReactNode;
};

function FavoritesContextProvider({children}: PropsType) {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavouriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavouriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
