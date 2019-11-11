import React from 'react';
import {connect} from 'react-redux';

import '../styles/MovieDetail.scss';

const MovieDetail = props => {
  console.log(props);
  if (props.selectedMovie) {
    return (
      <React.Fragment>
        <h3>Movie detail is</h3>
        <div className="movie-detail">
          <img src={props.selectedMovie.image} />
          <div className="movie-caption">
            <p>Title: {props.selectedMovie.title}</p>
            <p>Director: {props.selectedMovie.director}</p>
            <p>Duration: {props.selectedMovie.duration}min</p>
            <p>Release: {props.selectedMovie.release}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return null;
};

const mapStateToProps = state => {
  console.log(state);

  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetail);
