import Card from "./Card";

const Home = () => {
  return (
    <div className="mt-8 px-2 sm:px-3 sm:mt-12 lg:px-52">
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
            className="px-2 py-1 rounded-md border-2 border-gray-300 mx-3 focus:outline-orange-400 sm:mx-6 lg:text-xl"
          />
          <button className="bg-orange-400 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-500 lg:text-xl lg:px-8 ">
            Search
          </button>
        </form>
      </section>
      <hr className="mt-6" />
      <section className="mb-20 mt-10 flex flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};
export default Home;
