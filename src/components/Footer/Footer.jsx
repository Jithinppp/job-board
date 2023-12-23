import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
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
  );
}
export default Footer;
