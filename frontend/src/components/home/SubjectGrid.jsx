import subjects from "../../data/subjects";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";
import SubjectCard from "./SubjectCard";

export default function SubjectGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>

        <SectionTitle
          title="Popular Subjects"
          subtitle="Browse tutors by subject."
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}