import {combineReducers} from 'redux';

const movieReducer = () => {
  return [
    {
      title: 'Titanic',
      duration: 194,
      release: '1997',
      director: 'James Cameron',
      image:
        'http://intlportal2.s3.foxfilm.com/intlportal2/dev-temp/ja-JP/__55ad68b208193.jpg',
    },
    {
      title: 'The Godfather',
      duration: 177,
      release: '1972',
      director: 'Francis Ford Coppola',
      image:
        'https://blogimg.goo.ne.jp/user_image/23/80/3c44110ce595269a9c1d4e34f8a99831.jpg',
    },

    {
      title: 'Nuovo Cinema Paradiso',
      duration: 155,
      release: '1988',
      director: 'Giuseppe Tornatore',
      image: 'http://livedoor.blogimg.jp/katchan29/imgs/6/f/6f41d97f.jpg',
    },
    {
      title: 'The Shawshank Redemption',
      duration: 143,
      release: '1995',
      director: 'Frank Darabont',
      image: 'http://www.wagonoffice.co.jp/files/snap/2014/12/img_0.jpg',
    },
    {
      title: 'Good Will Hunting',
      duration: 127,
      release: '1998',
      director: 'Gus Van Sant',
      image: 'http://blog-imgs-38.fc2.com/e/n/u/enumaru/Will_Hunting.jpg',
    },
  ];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;

    default:
      return selectedMovie;
  }
};

export default combineReducers({
  movies: movieReducer,
  selectedMovie: selectedMovieReducer,
});
