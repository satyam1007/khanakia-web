import React, { useEffect } from "react";
import FAQ from "./FAQ";

function Services() {
  const pageTitle = "Services - Khanakia - Excellence in Software Development";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <>
      <div className="m-5">
        <div>
          <h1 className="text-6xl font-bold" id="Comprehensive">
            Comprehensive <br /> Services
          </h1>
        </div>
        <div className="mt-8 w-1/2 px-2" id="services-para">
          <p className="md:text-2xl text-lg font-light text-justify">
            From strategy to execution, our wining combination of innovative
            thinking, scientific design, sophisticated development, and ongoing
            analysis ensure we’re delivering values to help you grow.
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#F3F3F3",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
        className="mt-20"
      >
        <div className="p-10 flex items-center justify-around flex-wrap gap-10">
          <div>
            <div>
              <img src="/innovate.svg" alt="innovate" width={100} />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl">Innovate</h1>
              <div className="w-52 leading-7 mt-3">
                <p className="text-md font-light">
                  Design Thinking Strategy Technolog Architecture Digital
                  Product Strategy Innovative Sprints
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/design.svg" alt="design" width={100} />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl">Design</h1>
              <div className="w-52 leading-7 mt-3">
                <p className="text-md font-light">
                  UI/UX Research UI/UX Design Brand Identity Design Graphic
                  Design
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/develop.svg" alt="develop" width={100} />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl">Develop</h1>
              <div className="w-52 leading-7 mt-3">
                <p className="text-md font-light">
                  Web Applications Enterprise Systems Mobile Apps Websites
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="/grow.svg" alt="grow" width={100} />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl">Grow</h1>
              <div className="w-52 leading-7 mt-3">
                <p className="text-md font-light">
                  Marketing Strategy Optimization/Analysis Interactive Videos
                  Content Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-20">
          <div className="relative-container yellow-bg">
            <h1 className="text-6xl relative yellow-bg" id="yellowish-heading">
              We Can Help You With
            </h1>
          </div>
        </div>
        <div className="py-20">
          <FAQ />
        </div>
      </div>
    </>
  );
}

export default Services;
