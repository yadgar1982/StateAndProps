import React from "react";

function MovieCards({ movies }) {
    console.log(movies);
  return (
    <div className="card my-3">
        {movies.map((movie) => {
          <div key={movie.rank}>
           <h3>{movie.title}</h3> 
           <p>{movie.rank}</p> 
           <p>{movie.id}</p> 

          </div>
          
        })}
      
        


    </div>
  );
}

export default MovieCards