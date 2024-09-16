"use client";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideData = [
    {
      id: 0,
      img: "/intro2.png", // Corrected image path
      title: "Trending item",
      mainTitle: "women's latest fashion",
      price: "$120",
    },
    {
      id: 1,
      img: "/intro3.png", // Corrected image path
      title: "Trending item",
      mainTitle: "women's latest fashion",
      price: "$120",
    },
    {
      id: 2,
      img: "/slider3.png", // Corrected image path
      title: "Trending item",
      mainTitle: "women's latest fashion",
      price: "$120",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
