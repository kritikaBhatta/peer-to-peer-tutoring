export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",

    secondary:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}