import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative min-h-screen">
      {/* header */}
      <header className=" mt-4 py-4">
        <nav className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-medium tracking-[-2px] text-gray-700">
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
      <main className="">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className=" absolute bottom-0 left-0">footer</footer>
    </div>
  );
}
export default Layout;
