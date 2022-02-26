const Card = () => {
  return (
    <div className="w-72 rounded-md shadow-lg shadow-gray-500 mx-4 my-4">
      <img
        src="http://localhost:3000/shoe1.png"
        alt="shoe-images"
        className="rounded-t-md m-auto"
      />
      <div className="flex justify-between px-3 mt-5">
        <h2 className="text-2xl">Shoe Name</h2>
        <span className="px-1 py-1 rounded-md flex justify-center font-semibold bg-orange-200">
          <img
            src="http://localhost:3000/star.png"
            alt="star"
            className="mr-1 w-6"
          />
          5
        </span>
      </div>
      <div className="px-3 py-4">
        <h3 className="text-3xl font-semibold">400/-</h3>
      </div>
      <p className="px-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        dolorum nobis, molestiae maiores excepturi maxime ipsa dolores
        explicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiam
        tempora aliquam.
      </p>
      <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-md mx-3 my-4 hover:bg-orange-500 lg:text-xl lg:px-6">
        Read more
      </button>
    </div>
  );
};

export default Card;
