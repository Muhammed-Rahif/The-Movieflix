import Header from "../components/Home/Header";
import ActionMovies from "../components/Home/ActionMovies";
import GenresList from "../components/Home/GenresList";

export default function Home() {
  return (
    <div id="home" className="flex flex-col gap-3 py-6">
      <Header />
      <GenresList />
      <ActionMovies />
      <ActionMovies />
      <ActionMovies />
      <ActionMovies />
    </div>
  );
}
