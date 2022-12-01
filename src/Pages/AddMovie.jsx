import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MovieContext } from '../Providers/MovieSession';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  margin-top: 32px;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  font-size: 18px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: solid 1px black;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: transparent;
  font-size: 18px;
  border: solid 1px black;
  cursor: pointer;

  &:hover {
    background-color: rgba(26, 120, 167, 0.2);
  }
`;

export default function AddMovie() {
  const { movies, setMovies } = useContext(MovieContext);
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    id: (movies.length + 1).toString(),
    title: '',
    category: '',
    image: '',
  });

  const [formError, setFormError] = useState(false);

  useEffect(() => {
    setFormError(false);
  }, []);

  function handleCreate() {
    setMovies([...movies, newMovie]);

    if (
      newMovie.id.length > 0 &&
      newMovie.title.length > 0 &&
      newMovie.category.length > 0 &&
      newMovie.image.length > 0
    ) {
      setNewMovie({
        id: (movies.length + 1).toString(),
        title: '',
        category: '',
        image: '',
      });

      setFormError(false);

      return navigate('/');
    } else {
      setFormError(true);
    }
  }

  return (
    <Container>
      <h1 style={{ marginBottom: 128 }}>Add a new movie</h1>
      {formError && (
        <p style={{ color: 'red' }}>
          Please fill all the fields before submit.
        </p>
      )}
      <StyledLabel htmlFor="title">Title</StyledLabel>
      <StyledInput
        type="text"
        id="title"
        value={newMovie.title}
        placeholder="Ex: Harry Potter"
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <StyledLabel htmlFor="category">Category</StyledLabel>
      <StyledInput
        type="text"
        id="category"
        value={newMovie.category}
        placeholder="Ex: Drama"
        onChange={(e) => setNewMovie({ ...newMovie, category: e.target.value })}
      />
      <StyledLabel htmlFor="image">Image</StyledLabel>
      <StyledInput
        type="text"
        id="image"
        value={newMovie.image}
        placeholder="Ex: https://c0.lestechnophiles.com/www.madmoizelle.com/wp-content/uploads/2018/10/memes-prof-notes-640x400.jpg?resize=300,350&key=5ff2a774"
        onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
      />
      <SubmitButton onClick={() => handleCreate()}>Create</SubmitButton>
    </Container>
  );
}
