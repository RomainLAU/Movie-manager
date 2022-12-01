import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MovieContext } from '../Providers/MovieSession';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  width: calc(100% - 64px);
  max-width: 100vw;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: blue;
    text-decoration: underline;
  }

  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;

export default function Header() {
  const { movies } = useContext(MovieContext);

  return (
    <Nav>
      <div style={{ display: 'flex', columnGap: '16px' }}>
        <StyledLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Movies
        </StyledLink>
        <StyledLink
          to="/add"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Add a movie
        </StyledLink>
      </div>
      <p>There are currently {movies.length} movies</p>
    </Nav>
  );
}
