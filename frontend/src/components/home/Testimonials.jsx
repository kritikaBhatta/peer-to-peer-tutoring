import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const testimonials = [
  {
    name: "Emma",
    review:
      "PeerPrep helped me pass Calculus with confidence."
  },
  {
    name: "Daniel",
    review:
      "Finding a tutor was fast and easy."
  },
  {
    name: "Sophia",
    review:
      "My tutor explained concepts better than my lectures."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>

        <SectionTitle
          title="What Students Say"
          subtitle="Trusted by students across campus."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index}>
              <p className="italic text-gray-600">
                "{item.review}"
              </p>

              <h3 className="font-bold mt-6">
                — {item.name}
              </h3>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}