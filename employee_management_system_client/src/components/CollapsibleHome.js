import React from "react";
import { why_us } from "../assets/constants";
import "./CollapsibleHome.css";

const CollapsibleHome = () => {
  return (
    <>
      <div id="accordionFlush" className="lg:mt-16">
        {why_us.map((item) => (
          <div
            key={item.id}
            className="rounded-none py-5 border border-l-0 border-r-0 border-t-0 border-slate-500 bg-inherit"
          >
            <h2 className="mb-0" id={`flush-heading${item.id}`}>
              <button
                className="group relative flex w-full items-center rounded-none border-0 bg-transparent py-4 px-5 text-left text-3xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-inherit [&:not([data-te-collapse-collapsed])]:text-primary "
                // [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target={`#flush-collapse${item.id}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${item.id}`}
              >
                {item.label}
                <span
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="arrow ml-auto -mr-1"
                ></span>
              </button>
            </h2>
            <div
              id={`flush-collapse${item.id}`}
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby={`flush-heading${item.id}`}
              data-te-parent="#accordionFlush"
            >
              <div className="py-4 px-5">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollapsibleHome;
