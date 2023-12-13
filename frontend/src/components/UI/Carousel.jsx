export const Carousel = (props) => {
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
