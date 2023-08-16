import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./Accordion.css";
import { services } from "../assets/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      {services.map((item, index) => (
        <div key={item.id}>
        <Accordion
          open={open === `${item.id}`}
          animate={customAnimation}
        >
          <AccordionHeader
            onClick={() => {
              handleOpen(`${item.id}`);
            }}
            className="my-3 px-5 text-2xl sm:text-3xl text-left font-normal text-gray-600"
          >
            {item.label}
          </AccordionHeader>
          <hr className="hr hr-blurry" />
          <AccordionBody className="px-10 text-2xl ">
            <div className="text-justify">{item.text}</div>
            <ul className="points mt-10  py-2 grid sm:pr-20 ">
              {item.points.map((p) => (
                <>
                  <span className="justify-self-auto">
                    <FontAwesomeIcon
                      className="mr-5 mt-2"
                      icon={faCaretRight}
                    ></FontAwesomeIcon>
                  </span>
                  <li className="point p-3 mb-5 rounded-3xl">
                    <a>{p.point}</a>
                  </li>
                </>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
        </div>
      ))}
    </Fragment>
  );
}
