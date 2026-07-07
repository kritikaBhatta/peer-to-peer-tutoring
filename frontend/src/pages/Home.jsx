import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import SubjectGrid from "../components/home/SubjectGrid";
import FeaturedTutors from "../components/home/FeaturedTutors";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <SubjectGrid />
      <FeaturedTutors />
      <HowItWorks />
      <Testimonials />
    </>
  );
}