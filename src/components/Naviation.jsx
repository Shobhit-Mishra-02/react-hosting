import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex align-middle flex-wrap justify-between space-x-5 text-xl font-semibold bg-blue-500 py-4 px-2 sm:px-8">
      <div>
        <img
          src="http://localhost:3000/amazon.png"
          alt="logo"
          className="w-24"
        />
      </div>
      <div className="flex flex-wrap justify-center space-x-3 sm:space-x-6 align-middle">
        <li className="list-none hover:text-gray-600">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="list-none hover:text-gray-600">
          <Link to={"/page"}>Products</Link>
        </li>
        <li className="list-none hover:text-gray-600">
          <Link to={"/page"}>Featured</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navigation;
