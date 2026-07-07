import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const steps = [
  {
    title: "Search",
    description: "Find tutors by subject or course."
  },
  {
    title: "Book",
    description: "Choose a tutor and schedule a session."
  },
  {
    title: "Learn",
    description: "Meet online and improve your grades."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>

        <SectionTitle
          title="How PeerPrep Works"
          subtitle="Start learning in just three simple steps."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <div className="text-center">

                <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.description}
                </p>

              </div>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}