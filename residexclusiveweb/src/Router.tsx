import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/DashBoard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
