import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import SubjectGrid from "../components/home/SubjectGrid";
import FeaturedTutors from "../components/home/FeaturedTutors";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <SubjectGrid />
      <FeaturedTutors />
    </>
  );
}