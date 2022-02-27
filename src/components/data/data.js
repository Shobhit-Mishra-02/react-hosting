/*
Here I have added an array of product details,
each product contains shoe name, shoe price, star rating,
shoe Image, id, desc for the product card (desc), desc for the product view component(productViewDesc)

This array is the data which we need to display on the frontend of the ecom website.
*/

const productData = [
  {
    shoeName: "Bata",
    shoePrice: 2350,
    starRating: 5.0,
    deliveryTime: new Date("14 Jan 2022"),
    shoeImg: "shoe1.png",
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Hush Puppies",
    shoePrice: 1550,
    starRating: 4.0,
    deliveryTime: new Date("15 Jan 2022"),
    shoeImg: "shoe3.png",
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Louis Phillippe",
    shoePrice: 1550,
    starRating: 3.0,
    deliveryTime: new Date("25 Jan 2022"),
    shoeImg: "shoe1.png",
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Peter England",
    shoePrice: 3550,
    starRating: 5.0,
    deliveryTime: new Date("10 Jan 2022"),
    shoeImg: "shoe1.png",
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Timberland",
    shoePrice: 1300,
    starRating: 2.0,
    deliveryTime: new Date("24 Jan 2022"),
    shoeImg: "shoe2.png",
    id: 5,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Bata",
    shoePrice: 3050,
    starRating: 5.0,
    deliveryTime: new Date("20 Jan 2022"),
    shoeImg: "shoe2.png",
    id: 6,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Hush Puppies",
    shoePrice: 1590,
    starRating: 1.0,
    deliveryTime: new Date("20 Jan 2022"),
    shoeImg: "shoe2.png",
    id: 7,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Peter England",
    shoePrice: 1300,
    starRating: 3.0,
    deliveryTime: new Date("11 Jan 2022"),
    shoeImg: "shoe3.png",
    id: 8,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
  {
    shoeName: "Timberland",
    shoePrice: 1000,
    starRating: 2.0,
    deliveryTime: new Date("18 Jan 2022"),
    shoeImg: "shoe3.png",
    id: 9,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribusdolorum nobis, molestiae maiores excepturi maxime ipsa doloresexplicabo, ab a ut, quidem quia velit placeat repellendus. Sunt aperiamtempora aliquam.",
    productViewDesc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum error delectus eos ducimus sequi tenetur deserunt commodi est? Dolorum natus consequatur tenetur quidem debitis! Labore culpa repellendus earum facilis minima sint ratione alias quisquam veniam inventore rem esse vero non quam, dicta animi aspernatur iusto at optio possimus quia? Debitis cumque doloribus voluptate hic, et veniam voluptatem saepe veritatis officia cupiditate harum. Rerum dignissimos veritatis eaque cupiditate aperiam consectetur perspiciatis iusto vel distinctio nam. Officia odit, minus, debitis fugit placeat ipsa ducimus ullam voluptatem ex quis veniam sunt dicta accusamus adipisci illum necessitatibus excepturi molestiae nostrum. Ullam, odio! Non, ipsa.",
  },
];

export default productData;
