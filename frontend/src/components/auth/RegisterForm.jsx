import { useState } from "react";
import FormField from "../common/FormField";
import Button from "../common/Button";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <FormField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <FormField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <Button type="submit">
        Create Account
      </Button>
    </form>
  );
}