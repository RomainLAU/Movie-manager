import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies';
import { StorePovider } from './Providers/MovieSession';
import AddMovie from './Pages/AddMovie';
import Header from './Components/Header';

function App() {
  return (
    <StorePovider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/add" element={<AddMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </StorePovider>
  );
}

export default App;
