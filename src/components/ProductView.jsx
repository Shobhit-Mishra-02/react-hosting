const ProductView = () => {
  return (
    <div className="flex">
      <img src="http://localhost:3000/shoe1.png" alt="img" />

      <div>
        <div className="flex">
          <h1 className="list-none text-6xl font-semibold flex">Shoe Name</h1>
          <span className="px-1 py-1 rounded-md flex justify-center font-semibold h-8 bg-orange-200 mt-6 mx-4">
            <img
              src="http://localhost:3000/star.png"
              alt="star"
              className="mr-1 w-6"
            />
            5
          </span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel vero
          nisi cumque delectus obcaecati odit impedit praesentium, saepe, ex
          omnis excepturi nam quis asperiores recusandae expedita id error
          pariatur.
        </p>

        <h3>Price</h3>

        <h4>Qty</h4>

        <div>
          <button></button>
          <input type="text" />
          <button></button>
        </div>

        <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-md mx-3 my-4 hover:bg-orange-500 lg:text-xl lg:px-6">
          Read more
        </button>
      </div>
    </div>
  );
};
export default ProductView;
