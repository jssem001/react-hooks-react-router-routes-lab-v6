import React from "react";


function Creators({name, movies}){
    const movieList = movies.map(movie => <li key={movie}>{movie}</li>)
    return(
    <>
        <h2>{name}</h2>
        <ul>
            {movieList}
        </ul>
    </>
    
);
}

export default Creators