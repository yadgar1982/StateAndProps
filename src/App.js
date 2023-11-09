import React,{ useState} from 'react';
import './App.css';
import MovieTitle from './Components/MovieTitle';
import myArray from './Components/myArray';
import MovieCards from './Components/MovieCards';


function App() {
  const [movies, setMovies] = useState (myArray);
  return (
    <div className="App">
      <MovieTitle/>
      <MovieCards movies={movies}/>
    </div>
  );
}

export default App;
