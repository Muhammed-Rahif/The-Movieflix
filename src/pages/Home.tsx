import Header from "../components/Home/Header";
import ActionMovies from "../components/Home/ActionMovies";
import AdventureMovie from "../components/Home/AdventureMovie";
import ComedyMovie from "../components/Home/ComedyMovie";
import GenresList from "../components/Home/GenresList";
import CrimeMovie from "../components/Home/CrimeMovie";

export default function Home() {
  return (
    <div id="home" className="py-6">
      <Header />
      <GenresList />
      <ActionMovies />
      <AdventureMovie />
      <ComedyMovie />
      <CrimeMovie />
    </div>
  );
}
