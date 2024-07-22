import Slider from "react-slick";
import "./slider.css"
export default function SlideShow({children}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider className="slider" {...settings}>
        {children}
    </Slider>
)}