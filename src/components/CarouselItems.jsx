
import { SplideSlide } from "@splidejs/react-splide";

export default function CarouselItems({ children, onPress, title, id, ...props }) {
  return (
    <SplideSlide className="flex justify-center">
      <div id={id} {...props}>
        <span
          id={id}
          className="text-white font-shadow font-medium font-poppins shadow-sm"
        >
          {title}
        </span>
      </div>
    </SplideSlide>
  );
}
