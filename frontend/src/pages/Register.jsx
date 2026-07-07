import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="max-w-md mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Create Your Account
      </h1>

      <RegisterForm />
    </div>
  );
}