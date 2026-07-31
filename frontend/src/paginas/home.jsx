import Navbar from "./componentes/navbar.jsx"
import PlayersList from "./playerslist";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home">

        <h1>STATS FIFA</h1>

        <PlayersList />

      </main>
    </>
  );
}

export default Home;