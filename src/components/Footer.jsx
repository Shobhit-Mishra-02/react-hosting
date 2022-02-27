import { Link } from "react-router-dom";

//Here I have created Footer component

const Footer = () => {
  return (
    <div className="bg-slate-300 dark:bg-slate-700 dark:text-white mt-20 py-12 rounded-t-md">
      <div className="flex justify-between px-24">
        <img
          src="https://shobhit-mishra-02.github.io/react-hosting/amazon.png"
          alt="logo"
        />
        <ul className="flex space-x-5 text-gray-500">
          <li>
            <Link
              to={"/react-hosting"}
              className="dark:text-white dark:hover:text-gray-400 hover:text-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/react-hosting"}
              className="dark:text-white dark:hover:text-gray-400 hover:text-gray-600"
            >
              Featured
            </Link>
          </li>
          <li>
            <Link
              to={"/react-hosting"}
              className="dark:text-white dark:hover:text-gray-400 hover:text-gray-600"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-4 mx-10" />
      <div className="flex justify-center mt-9">
        <li className="list-none">© 2022 amazon. All Rights Reserved.</li>
      </div>
    </div>
  );
};

export default Footer;
