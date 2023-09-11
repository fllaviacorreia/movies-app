import React from "react";
import { FavoritesContext } from "../context";

export function useFavoritesMovies() {
    const {favorites} = React.useContext(FavoritesContext);
    const {onRemoveFavorite} = React.useContext(FavoritesContext);
  console.log("hooks f", favorites);
  console.log("hooks on", onRemoveFavorite);

    return {
      favorites,
      onRemoveFavorite,
    }
  }