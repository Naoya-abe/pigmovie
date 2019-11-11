//Action creator
export const selectMovie = movie => {
  //Action
  return {
    type: 'MOVIE_SELECTED',
    payload: movie,
  };
};
