import { useEffect, useState } from "react";
import Creators from "../components/Creators"
import NavBar from "../components/NavBar";

function Actors() {
  const [actor, setActor] = useState([]);
  
  useEffect(() =>{
    fetch('http://localhost:4000/actors')
    .then(r => r.json())
    .then(data => setActor(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
      <NavBar/>
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        <article>
        {actor.map( act =>
            <Creators key={act.id} name={act.name} movies={act.movies} />
          )}
        </article>
      </main>
    </>
  );
};

export default Actors;
