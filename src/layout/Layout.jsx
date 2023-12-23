// libs
import { Outlet } from "react-router-dom";
// comps
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
      {/* header */}
      <Header />
      {/* main */}
      <main className="my-4 min-h-[80vh]">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
export default Layout;

// import { FaLinkedinIn } from "react-icons/fa6";
