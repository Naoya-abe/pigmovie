import React from 'react';
import {connect} from 'react-redux';
import {selectMovie} from '../actions';

class MovieList extends React.Component {
  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div className="item" key={movie.title}>
          <div className="right floated content">
            <div
              className="ui button primary"
              onClick={() => this.props.selectMovie(movie)}>
              Select
            </div>
          </div>
          <i className="file video icon" />
          <div className="content">{movie.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {movies: state.movies};
};

export default connect(
  mapStateToProps,
  {selectMovie}
)(MovieList);
