import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function TestPage() {
  return <h1>It works!</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<TestPage />} />
      </Route>
    </Routes>
  );
}