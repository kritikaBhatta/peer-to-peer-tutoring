export default function Badge({ children }) {
  return (
    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}