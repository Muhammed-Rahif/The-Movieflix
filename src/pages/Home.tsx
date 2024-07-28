import Header from "../components/home/Header";
import ActionMovies from "../components/home/ActionMovies"
import AdventureMovie from "../components/home/AdventureMovie"
import ComedyMovie from "../components/home/ComedyMovie"
import CrimeMovie from "../components/home/CrimeMovie"
export default function Home() {
  return (
    <div id="home">
      <Header />
      <ActionMovies/>
      <AdventureMovie/>
      <ComedyMovie/>
      <CrimeMovie/>
  
    </div>
  );
}
