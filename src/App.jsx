import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Employers from "./pages/Employers";
import Companies from "./pages/Companies";
import Job from "./pages/Job";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/job/:id" element={<Job />} />
      </Route>
    </Routes>
  );
}
export default App;
