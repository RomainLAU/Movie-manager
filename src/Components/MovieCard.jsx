import { useContext, useState } from 'react';
import styled from 'styled-components';
import { MovieContext } from '../Providers/MovieSession';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  p {
    margin-top: 4px;
    margin-bottom: 8px;
  }

  button {
    background-color: transparent;
    border: solid 1px grey;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background-color: rgba(70, 70, 70, 0.1);
    }
  }

  .delete {
    border-color: red;

    &:hover {
      background-color: rgba(255, 0, 0, 0.1);
    }
  }
`;

const TitleInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: solid 1px grey;
  font-size: 18px;
`;

const Title = styled.p`
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 24px;
`;

export default function MovieCard({ movieData }) {
  const { movies, setMovies } = useContext(MovieContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(movieData.title);

  function handleDelete() {
    setMovies(movies.filter((movie) => movie.id !== movieData.id));
  }

  function handleUpdate() {
    if (isEditing) {
      setMovies(
        movies.map((item) => {
          if (item.id === movieData.id) {
            return { ...item, title: newTitle };
          } else {
            return item;
          }
        })
      );

      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <Card>
      <img src={movieData.image} alt={movieData.title} />
      {isEditing ? (
        <TitleInput
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <Title>{movieData.title}</Title>
      )}
      <ButtonContainer>
        <button className="delete" onClick={() => handleDelete()}>
          Delete
        </button>
        <button className="update" onClick={() => handleUpdate()}>
          Update
        </button>
      </ButtonContainer>
    </Card>
  );
}
