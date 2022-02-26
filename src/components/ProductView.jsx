const ProductView = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20 my-40 mx-10 py-5  dark:rounded-md dark:shadow-xl dark:shadow-slate-800 dark:bg-slate-800 dark:text-white">
      <img
        className="w-[350px] h-[350px]"
        src="http://localhost:3000/shoe1.png"
        alt="img"
      />

      <div className="px-10 w-[900px]">
        <div className="flex">
          <h1 className="list-none text-6xl font-semibold flex">Shoe Name</h1>
          <span className="px-1 py-1 rounded-md flex justify-center font-bold h-8 bg-orange-200 mt-6 mx-4 dark:text-black">
            <img
              src="http://localhost:3000/star.png"
              alt="star"
              className="mr-1 w-6"
            />
            5
          </span>
        </div>

        <p className="py-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel vero
          nisi cumque delectus obcaecati odit impedit praesentium, saepe, ex
          omnis excepturi nam quis asperiores recusandae expedita id error
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quis necessitatibus cum rerum facilis repellendus ex tempore ipsam
          eligendi inventore, itaque corrupti soluta asperiores eveniet ea? A
          accusantium incidunt adipisci ratione!
        </p>

        <h3 className="text-3xl font-semibold py-3"> Price</h3>

        <h4 className="text-xl font-semibold py-2">Qty</h4>

        <div className="flex mt-2">
          <button className="rounded-l-md bg-slate-200 px-1 dark:text-gray-600 dark:bg-slate-400">
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
            3
          </span>
          <button className="rounded-r-md bg-slate-200 px-1 dark:text-gray-600 dark:bg-slate-400">
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

        <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-md my-7 hover:bg-orange-500 lg:text-xl lg:px-6">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductView;
