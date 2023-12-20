import { Link, Outlet } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

function Layout() {
  return (
    <>
      {/* header */}
      <header className=" mt-4 py-4">
        <nav className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-medium  text-gray-700">
              <Link to={"/"}>Joboard</Link>
            </p>
          </div>
          <ul className="flex space-x-10">
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            <li>
              <Link to={"/sign-in"}>Sign in</Link>
            </li>
            <li>
              <Link to={"/companies"}>Companies</Link>
            </li>
            <li>
              <Link to={"/employers"}>Employers</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* main */}
      <main className="my-4 min-h-[80vh]">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="mt-7 bottom-0 left-0 bg-black p-7">
        <div className="flex justify-center items-center gap-5 py-5">
          <Link
            to={"#"}
            className=" w-11 h-11 bg-white rounded-full flex items-center justify-center"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </Link>
          <Link
            to={"#"}
            className=" w-11 h-11 bg-white rounded-full flex items-center justify-center"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            to={"#"}
            className=" w-11 h-11 bg-white rounded-full flex items-center justify-center"
          >
            <IoMdMailUnread className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-white flex gap-8 justify-center flex-wrap">
          <Link to={"/"}>Home</Link>
          <Link to={"/jobs"}>Jobs</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"https://www.jithinp.vercel.app"}>Contact Us</Link>
        </div>
      </footer>
    </>
  );
}
export default Layout;

// import { FaLinkedinIn } from "react-icons/fa6";
