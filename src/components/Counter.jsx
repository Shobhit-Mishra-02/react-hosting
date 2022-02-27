import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const increaseCount = () => {
    setCounter(counter + 1);
  };

  const reduceCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="flex mt-2">
      <button
        onClick={increaseCount}
        className="rounded-l-md bg-slate-200 px-1 dark:text-gray-600 dark:bg-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <span className="bg-slate-300 w-10 text-center font-semibold text-xl dark:text-gray-500">
        {counter}
      </span>
      <button
        onClick={reduceCount}
        className="rounded-r-md bg-slate-200 px-1 dark:text-gray-600 dark:bg-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
export default Counter;
