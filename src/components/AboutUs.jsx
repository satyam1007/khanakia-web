import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  const pageTitle = "About Us - Khanakia - Excellence in Software Development	";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <>
      <div className="m-5">
        <div>
          <h1 className="text-6xl font-bold" id="Comprehensive">
            About us
          </h1>
        </div>
        <div className="mt-8 w-1/2 px-2" id="services-para">
          <p className="text-2xl font-light text-justify">
            We are a team of passionate product managers, developers and
            designers helping businesses of all sizes. No matter how big or
            small our client’s organisation and budgets are, we’ve got a
            solution for them.
          </p>
        </div>
      </div>

      <div className="py-28 mt-32 bg-[#FFEB3B]">
        <div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-center pb-8">
            Our Contribution
          </h1>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap px-4">
          <div className="border border-black w-96 h-80 text-center">
            <div className="mt-10">
              <h1 className="text-8xl font-extralight">150 +</h1>
              <span className="tracking-widest font-light text-sm">
                APPLICATIONS
              </span>
            </div>
            <div className="pt-8">
              <span className="text-md font-light tracking-wider">
                Finished products both in-product & <br /> outside, some sitting
                in folders.
              </span>
            </div>
          </div>
          <div className="border border-black w-96 h-80 text-center">
            <div className="mt-10">
              <h1 className="text-8xl font-extralight">20 +</h1>
              <span className="tracking-widest font-light text-sm">
                VERTICALS
              </span>
            </div>
            <div className="pt-8">
              <span className="text-md font-light tracking-wider">
                Health, AI, fintech, Sales Automation, <br /> Blockchain, FMCG
                and rest…
              </span>
            </div>
          </div>
          <div className="border border-black w-96 h-80 text-center">
            <div className="mt-10">
              <h1 className="text-8xl font-extralight">43 +</h1>
              <span className="tracking-widest font-light text-sm">BRANDS</span>
            </div>
            <div className="pt-8">
              <span className="text-md font-light tracking-wider">
                Global & Indian brands. Different <br /> cultures, different
                tasks and
                <br />
                timezones.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Learn about <span className="text-[#0098E8]">our approach</span> to{" "}
            <br className="hidden sm:block" /> building relationships and{" "}
            <br className="hidden sm:block" /> growing businesses.
          </p>
        </div>
        <div className="pt-10 sm:pt-20">
          <Link
            to="/Services"
            className="text-lg sm:text-xl font-medium text-black border-2 border-black py-3 sm:py-4 px-5 sm:px-7 hover:bg-black duration-300 hover:text-white rounded-full"
          >
            What We Do
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
