import { createContext, useEffect, useState } from 'react';
import { getMovies } from '../Api/movie';

export const MovieContext = createContext();

export function StorePovider(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((response) => {
      setMovies(response);
    });
  }, []);
  return (
    <MovieContext.Provider value={{ movies: movies, setMovies: setMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
}
