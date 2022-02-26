import { Link } from "react-router-dom";
import { useContext } from "react";
import themeColor from "../context";

const Navigation = () => {
  const [theme, setTheme] = useContext(themeColor);

  const changeTheme = () => {
    if (theme.length) {
      setTheme("");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="flex align-middle flex-wrap justify-between space-x-5 text-xl font-semibold bg-blue-500 sticky top-0 shadow-md shadow-slate-500 py-4 px-2 sm:px-8 dark:bg-slate-800 dark:text-white">
      <div>
        <Link to={"/"}>
          <img
            src="http://localhost:3000/amazon.png"
            alt="logo"
            className="w-24"
          />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center space-x-3 sm:space-x-6 align-middle">
        <li className="list-none cursor-pointer" onClick={changeTheme}>
          {theme.length ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </li>
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
