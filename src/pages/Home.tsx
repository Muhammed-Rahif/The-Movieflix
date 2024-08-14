import Header from "../components/Home/Header";
import TrendingList from "../components/Home/TrendingList";
import GenresList from "../components/Home/GenresList";

export default function Home() {
  return (
    <div id="home" className="flex flex-col gap-1 pb-6">
      <Header />
      <GenresList />
      <TrendingList />
      <TrendingList />
      <TrendingList />
      <TrendingList />
    </div>
  );
}
