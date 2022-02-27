import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import productData from "../data/data";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  const doSearch = (e) => {
    const searchStr = e.target.value;
    let tempArray = [];
    productData.forEach((element) => {
      if (
        element.shoeName.includes(searchStr) ||
        element.shoeName.toLowerCase().includes(searchStr)
      ) {
        tempArray.push(element);
      }
    });
    setCardData(tempArray);
  };

  useEffect(() => {
    setCardData(productData);
  }, []);

  return (
    <div className="mt-14 px-2 sm:px-3 sm:mt-12 lg:px-52">
      <h1 className="text-center font-bold text-3xl mb-4 sm:mb-8 sm:text-4xl lg:text-6xl ">
        The Shoe Company Name
      </h1>
      <p className="text-center lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        commodi fugiat facilis atque est totam aspernatur placeat ipsa itaque
        optio libero maxime officia sunt distinctio aut quae! Ipsa, ipsam rerum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore
        magnam obcaecati pariatur sequi rem sit deleniti eius blanditiis, iure
        dolore magni nam suscipit vitae inventore non odit distinctio neque!
      </p>

      <section className="mt-6 mb-5 sm:mt-10 lg:mt-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center"
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search...."
            className="px-2 py-1 rounded-md border-2 border-gray-300 mx-3 focus:outline-orange-400 sm:mx-6 lg:text-xl dark:border-2 dark:border-gray-500"
            onInput={(e) => doSearch(e)}
          />
          <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-500 lg:text-xl lg:px-8 ">
            Search
          </button>
        </form>
      </section>
      <hr className="mt-6" />
      <section className="mt-10 flex flex-wrap justify-center">
        {cardData.length ? (
          cardData.map((prod) => {
            return (
              <Card
                key={prod.id}
                shoeName={prod.shoeName}
                shoePrice={prod.shoePrice}
                desc={prod.desc}
                starRating={prod.starRating}
                shoeImg={prod.shoeImg}
                id={prod.id}
              />
            );
          })
        ) : (
          <h1>No results</h1>
        )}
      </section>
    </div>
  );
};
export default Home;
