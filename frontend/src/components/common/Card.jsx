export default function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
      {children}
    </div>
  );
}