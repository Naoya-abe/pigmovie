import React from 'react';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const App = () => {
  return (
    <div className="ui container grid" style={{marginTop: '10px'}}>
      <div className="ui row">
        <div className="column eight wide">
          <MovieList />
        </div>
        <div className="column six wide">
          <MovieDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
