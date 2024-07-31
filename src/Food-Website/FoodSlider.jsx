
import { topPicks } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./FoodSlider.css"
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const FoodSlider = () => {

  const dispatch = useDispatch()

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-full sm:px-10 md:px-20 py-20 mb-10 ">
      <h1 className=" text-black mb-10 sm:text-3xl md:text-4xl font-bold ">
        What sounds good to you?
      </h1>
      <div className=" ">
        <Slider {...settings}>
          {topPicks.map((item) => (
            <div key={item.id} className=" py-5  ">
              <div>
                <div className=" flex justify-center ">
                  <img
                    src={item.image}
                    className="w-[200px] h-[200px] object-cover rounded-full "
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <p className=" capitalize text-xl">{item.naem}</p>
                  <p>{item.price}</p>
                  <button onClick={()=> dispatch(addItem({name:item.name, price: item.price, image:item.image, id:item.id }))} className="w-28 mt-2 text-lg bg-black text-white hover:text-orange-500  rounded-md px-2 py-1">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FoodSlider;
