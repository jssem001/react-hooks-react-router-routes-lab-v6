import { useEffect, useState } from "react";
import Creators from "../components/Creators"
import NavBar from "../components/NavBar";

function Directors() {
  const [director, setDirector] = useState([]);
  
  useEffect(() =>{
    fetch('http://localhost:4000/directors')
    .then(r => r.json())
    .then(data => setDirector(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        <article>
        {director.map( creator =>
            <Creators key={creator.id} name={creator.name} movies={creator.movies} />
          )}
        </article>
      </main>
    </>
  );
};

export default Directors;
