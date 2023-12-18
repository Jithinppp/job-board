import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import Jobs from "./routes/Jobs";
import Employers from "./routes/Employers";
import Companies from "./routes/Companies";
import Job from "./routes/Job";
import SignIn from "./routes/SignIn";

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
