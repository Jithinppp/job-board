import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" mt-4 py-4">
      <nav className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-medium  text-gray-700">
            <Link to={"/"}>Joboard</Link>
          </p>
        </div>
        <ul className=" space-x-10 hidden sm:flex">
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
  );
}
export default Header;
