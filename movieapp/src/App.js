//App.js we have put functional component
import MovieList  from "./MovieList";
import Navbar from "./Navbar";

function App() {
  return (    
      <>
        <Navbar />
        <MovieList /> {/*call moviecard*/}

      </>

    );
}

export default App;
