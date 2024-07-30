import Header from "../components/Home/Header";
import CardsList from "../components/Home/CardsList";
import GenresList from "../components/Home/GenresList";

export default function Home() {
  return (
    <div id="home" className="flex flex-col gap-3 pb-6">
      <Header />
      <GenresList />
      <CardsList title="Action" />
      <CardsList title="Adventure" />
      <CardsList title="Trending" />
      <CardsList title="Horror" />
    </div>
  );
}
