import { useContext } from 'react';
import styled from 'styled-components';
import MovieCard from '../Components/MovieCard';
import { MovieContext } from '../Providers/MovieSession';

const Container = styled.div`
  padding: 64px;
  margin-top: 32px;
`;

const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

export default function Movies() {
  const { movies } = useContext(MovieContext);

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Movies</h1>
      <MovieList>
        {movies &&
          movies.map((movie) => {
            return <MovieCard movieData={movie} key={movie.id} />;
          })}
      </MovieList>
    </Container>
  );
}
