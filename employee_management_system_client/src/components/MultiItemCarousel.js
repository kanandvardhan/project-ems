import { useState, useRef, useEffect } from "react";
import "./MultiItemCarousel.css";

const MultiItemCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const carouselWidth = carouselRef.current.offsetWidth;
    const numberOfVisibleItems = Math.floor(carouselWidth / 300);
    const calculatedItemWidth = carouselWidth / numberOfVisibleItems;

    setItemWidth(calculatedItemWidth);

    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((currentIndex) =>
          currentIndex === items.length - 1 ? 0 : currentIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, items.length, windowWidth]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 30}rem)` }}
      >
        {items.map((item) => (
          <div
            className="carousel-item"
            key={item.id}
            // style={{ width: `${itemWidth}px` }}
          >
            <img
              className="object-fill"
              src={require(`../assets/images/${item.image}.jpg`)}
              alt={item.title}
            />
            <h3 className="text-center ">{item.title}</h3>

            <p className="text-justify">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrevious}>
        &#8249;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#8250;
      </button>

      <button className="carousel-control play" onClick={handlePlay}>
        &#9654;
      </button>
      <button className="carousel-control pause" onClick={handlePause}>
        &#10074;&#10074;
      </button>

      <div className="carousel-indicators">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiItemCarousel;
