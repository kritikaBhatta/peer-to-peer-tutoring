import Card from "../common/Card";

export default function SubjectCard({ subject }) {
  return (
    <Card>
      <div className="text-center">
        <div className="text-5xl mb-4">
          {subject.icon}
        </div>

        <h3 className="font-semibold text-lg">
          {subject.name}
        </h3>
      </div>
    </Card>
  );
}