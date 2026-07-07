import Input from "./Input";

export default function FormField({
  label,
  error,
  ...props
}) {
  return (
    <div className="space-y-2">
      <Input
        label={label}
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}