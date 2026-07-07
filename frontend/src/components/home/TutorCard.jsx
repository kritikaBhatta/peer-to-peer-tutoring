import Card from "../common/Card";
import Button from "../common/Button";

export default function TutorCard({ tutor }) {
  return (
    <Card>
      <div className="flex flex-col gap-4">

        <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
          {tutor.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        <div>
          <h3 className="text-xl font-bold">{tutor.name}</h3>
          <p className="text-gray-600">{tutor.subject}</p>
        </div>

        <div className="flex justify-between">
          <span>⭐ {tutor.rating}</span>
          <span className="font-semibold">${tutor.price}/hr</span>
        </div>

        <Button>View Profile</Button>

      </div>
    </Card>
  );
}