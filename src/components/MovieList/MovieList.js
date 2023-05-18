import React from 'react';
import './styles.css';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = (props) => {
  const movies = [
    {
      title: 'movie 1',
      rating: 1.5
    },
    {
      title: 'movie 2',
      rating: 2.5
    },
    {
      title: 'movie 3',
      rating: 3.5
    },
    {
      title: 'movie 4',
      rating: 4.5
    },
    {
      title: 'movie 5',
      rating: 5.5
    },
    {
      title: 'movie 6',
      rating: 6.5
    },
    {
      title: 'movie 7',
      rating: 7.5
    },
    {
      title: 'movie 8',
      rating: 8.5
    },
    {
      title: 'movie 9',
      rating: 9.5
    },
    {
      title: 'movie 10',
      rating: 10
    }
  ]

  return (
    <>
    {props.movies.search? (
      <div id='grid-container'>
        {props.movies.search.map((movie, key) => (
          <div key={key} className="grid-item">
            <MovieItem movies={movie}/>
          </div>
        ))}
      </div>
    ) : (<p>Sorry we couldn't find your movies</p>)}
    </>
  );
};

export default MovieList;