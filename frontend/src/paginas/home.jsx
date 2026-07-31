import Navbar from "../componentes/navbar";
import PlayersList from "./playerslist";

function Home() {
  return (
    <main className="home">
      <h1>STATS FIFA</h1>
      <PlayersList />
    </main>
  );
}

export default Home;