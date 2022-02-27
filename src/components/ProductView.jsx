import { useParams } from "react-router-dom";
import productData from "../data/data";
import { useEffect } from "react";
import { useState } from "react";
import Counter from "./Counter";

const ProductView = () => {
  let { id } = useParams();
  const [prodData, setProdData] = useState({});

  useEffect(() => {
    productData.forEach((element) => {
      if (element.id === parseInt(id)) {
        setProdData(element);
      }
    });
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center mt-20 my-40 mx-10 py-5  dark:rounded-md dark:shadow-xl dark:shadow-slate-800 dark:bg-slate-800 dark:text-white">
      <img
        className="w-[350px] h-[350px]"
        src={`http://localhost:3000/${prodData.shoeImg}`}
        alt="img"
      />

      <div className="px-10 w-[900px]">
        <div className="flex">
          <h1 className="list-none text-6xl font-semibold flex">
            {prodData.shoeName}
          </h1>
          <span className="px-1 py-1 rounded-md flex justify-center font-bold h-8 bg-orange-200 mt-6 mx-4 dark:text-black">
            <img
              src="http://localhost:3000/star.png"
              alt="star"
              className="mr-1 w-6"
            />
            5
          </span>
        </div>

        <p className="py-7">{prodData.productViewDesc}</p>

        <h3 className="text-3xl font-semibold py-3"> {prodData.shoePrice}/-</h3>

        <h4 className="text-xl font-semibold py-2">Qty</h4>

        <Counter />

        <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-md my-7 hover:bg-orange-500 lg:text-xl lg:px-6">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductView;
