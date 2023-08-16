import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./CarouselBottom.css";
import { useNavigate } from "react-router-dom";

const _items = [
  {
    service: {
      title: "Due diligence",
      desc: "We provide company secretary services for due diligence related to takeover, merger, demerger, joint venture, hive-off including...",
      image: "due-diligence",
      link: "/services",
    },
  },
  {
    service: {
      title: "Company Law",
      desc: "We provide our company secretary services for company law matters for incorporation / formation of a company or LLP, Joint Venture Company, wholly owned subsidiary of foreign company, not-for-profit company, issue of stock options, buy-back of shares, creation of charge for...",
      image: "company-law",
      link: "/services",
    },
  },
  {
    service: {
      title: "Legal Services",
      desc: "We provide our professional services for advisory on legal matters, drafting or vetting of legal contracts including...",
      image: "legal-services",
      link: "/services",
    },
  },
  {
    service: {
      title: "Client Representation",
      desc: "We tailor our services and advice to the specific needs of the client, with the goal of increased efficiencies for the firms and long-term savings...",
      image: "client-representation",
      link: "/services",
    },
  },
  {
    service: {
      title: "Foreign Exchange and RBI Related",
      desc: "We provide company secretary services for advisory & consulting for setting up of company or LLP in India including FDI, Joint Venture with or without FIPB / RBI approval and other corporate restructuring or  start-up funding related legal / compliance process including...",
      image: "rbi",
      link: "/services",
    },
  },
  {
    service: {
      title: "Other Licenses/Registrations",
      desc: "We tailor our services and provide to the specific needs Shop & Establishment Import Export Code (IEC) - DGFT, Service Tax/GST...",
      image: "licenses",
      link: "/services",
    },
  },
  {
    service: {
      title: "Other Services",
      desc: "We provide Application for PAN for Individual, Company etc., Application and registration of Digital Signature Certificate on various portals (GST, MCA, Income Tax)...",
      image: "other-services",
      link: "/services",
    },
  },
];

var slideWidth = 30;
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    service: _items[idx].service,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const navigate = useNavigate();
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item " style={item.styles}>
      <a onClick={() => navigate("/services")}>
        <div className="carousel__slide-item-img-link">
          <img
            className="object-fill"
            src={require(`../assets/images/${item.service.image}.jpg`)}
            alt={item.service.title}
          />
        </div>
        <div className="carousel-slide-item__body">
          <h4>{item.service.title}</h4>
          <p>{item.service.desc}</p>
        </div>
      </a>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());
const AUTOPLAY_INTERVAL = 3000;

export default function Carousel() {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const bigLength = items.length;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);

    let autoplayTimer = null;

    if (!isTicking) {
      autoplayTimer = setTimeout(() => {
        nextClick();
      }, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (autoplayTimer) clearTimeout(autoplayTimer);
    };
  }, [items, isTicking]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev "
          onClick={() => prevClick()}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="btn-prev"
          ></FontAwesomeIcon>
          {/* <i className="carousel__btn-arrow carousel__btn-arrow--left" /> */}
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="btn-next"
          ></FontAwesomeIcon>
          {/* <i className="carousel__btn-arrow carousel__btn-arrow--right" /> */}
        </button>
        <div className="carousel__dots">
          {/* <h2>Width: {windowWidth}</h2> */}
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`${i === activeIdx ? "dot active" : "dot"} `}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
