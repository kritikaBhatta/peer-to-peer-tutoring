import tutors from "../../data/tutors";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TutorCard from "./TutorCard";

export default function FeaturedTutors() {
  return (
    <section className="py-20">
      <Container>

        <SectionTitle
          title="Featured Tutors"
          subtitle="Meet some of our highest-rated tutors."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}