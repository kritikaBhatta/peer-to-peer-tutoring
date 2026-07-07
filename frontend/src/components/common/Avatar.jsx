export default function Avatar({ initials }) {
  return (
    <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
      {initials}
    </div>
  );
}