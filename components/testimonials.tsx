import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials = () => {
  return (
    <Carousel className="bg-black text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <Review by="An imaginery friend">
          Khao shares a high quality passion for software building something
          people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="An imaginery friend">
          Khao shares a high quality passion for software building something
          people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="An imaginery friend">
          Khao shares a high quality passion for software building something
          people want.
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
