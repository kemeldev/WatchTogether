import { create } from 'zustand';

const useMovieStore = create((set) => ({
  favoriteList: [],
  watchlist: [],
  favoritesNotificacion: 0,
  watchNotificacion: 0,

  addToFavorites: (item) => {
    // Check if the item already exists in favoriteList
    const isDuplicate = !!useMovieStore.getState().favoriteList.find(
      (favItem) => favItem.backdrop_path === item.backdrop_path
    );
    // If not a duplicate, add it to the list
    if (!isDuplicate) {
      set((state) => ({
        favoriteList: [...state.favoriteList, item],
      }));
    }
  },

  addToWatchlist: (item) => {
    const isDuplicate = !!useMovieStore.getState().watchlist.find(
      (watchItem) => watchItem.backdrop_path === item.backdrop_path
    );
    if (!isDuplicate) {
      set((state) => ({
        watchlist: [...state.watchlist, item],
      }));
    }
  },

  removeFromFavorites: (poster_img) => {
    set((state) => ({
      favoriteList: state.favoriteList.filter(item => item.poster_path !== poster_img)
    }));
  },

  removeFromWatchList: (poster_img) => {
    set((state) => ({
      watchlist: state.watchlist.filter(item => item.poster_path !== poster_img)
    }));
  },

  incrementFavoritesNotification: (item) => {
    const isDuplicate = !!useMovieStore.getState().favoriteList.find(
      (favItem) => favItem.poster_path === item.poster_path
    );
    if (!isDuplicate) {
      set((state) => ({
        favoritesNotificacion: state.favoritesNotificacion + 1,
      }));
    }
  },


  incrementWatchNotification: (item) => {
    const isDuplicate = !!useMovieStore.getState().watchlist.find(
      (watchItem) => watchItem.poster_path === item.poster_path
    );
    if (!isDuplicate) {
      set((state) => ({
        watchNotificacion: state.watchNotificacion + 1,
      }));
    }
  },

  resetNotifications: () =>
    set({
      favoritesNotificacion: 0,
      watchNotificacion: 0,
    }),
}));

export default useMovieStore;