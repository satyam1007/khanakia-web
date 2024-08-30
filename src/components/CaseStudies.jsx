import { useEffect } from "react";

function CaseStudies() {
  const pageTitle =
    "Case Studies Archive - Khanakia - Excellence in Software Development";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div className="flex justify-between flex-wrap mt-5 md:justify-center sm:justify-center">
      <div
        style={{
          width: "100%", // Adjust the width to be responsive
          maxWidth: "550px", // Set a max-width to prevent it from getting too wide
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="m-7"
      >
        <div className="bg-gray-100 md:h-96 h-[270px]">
          <div className="p-1">
            <img
              src="https://www.khanakia.com/wp-content/uploads/2020/12/uxm-logo.png"
              alt="img-1"
              className="ml-8 mt-4 max-h-8 max-w-full text-left"
            />
          </div>
          <img
            src="https://www.khanakia.com/wp-content/uploads/2020/11/theuxm-banner.png"
            alt="img-2"
            className="m-auto p-7 object-cover" // Ensure the image covers its container
            style={{ maxHeight: "300px", maxWidth: "100%" }} // Make the image responsive
          />
        </div>
        <div className="m-6 pb-5">
          <p className="text-xl font-light">
            You can find a great deal on everything from a designer handbag to a
            container of auto parts. You’ll enjoy discounts and bonuses from all
            around the world and right in your own backyard.
          </p>
          <div className="mt-10">
            <h1 className="text-xl font-semibold">Services</h1>
            <ul className="font-light text-md mt-3 flex flex-col gap-1">
              <li>Application Development</li>
              <li>Product Design</li>
              <li>Devops</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "550px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="m-7"
      >
        <div style={{ backgroundColor: "#0098e8" }} className="pb-6 h-96">
          <div className="p-1">
            <img
              src="https://www.khanakia.com/wp-content/uploads/2020/12/mobilegoo-logo.png"
              alt="img-1"
              className="ml-8 mt-4 max-h-8 max-w-full text-left"
            />
          </div>
          <img
            src="https://www.khanakia.com/wp-content/uploads/2020/11/mg-banner.png"
            alt="img-2"
            className="m-auto pt-7 pb-6"
            style={{ height: "330px" }}
          />
        </div>
        <div className="m-6 pb-5">
          <p className="text-xl font-light">
            Mobilegoo lets you to sell your old mobile handset, tablet, and
            laptops at high price. App analyse and diagnose automatically
            hardware and software condition of your mobile by smart technology
            after analysation provides exact worth of it.
          </p>
          <div className="mt-10">
            <h1 className="text-xl font-semibold">Services</h1>
            <ul className="font-light text-md mt-3 flex flex-col gap-1">
              <li>Mobile App development</li>
              <li>Website Development</li>
              <li>Devops</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "550px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="m-7"
      >
        <div style={{ background: "#f45024" }} className="pb-6 h-96">
          <div className="p-1">
            <img
              src="https://www.khanakia.com/wp-content/uploads/2020/12/tsz-logo.png"
              alt="img-1"
              className="ml-8 mt-4 max-h-8 max-w-full text-left"
            />
          </div>
          <img
            src="https://www.khanakia.com/wp-content/uploads/2020/11/tsz-banner.png"
            alt="img-2"
            className="m-auto pt-7 pb-6"
            style={{ height: "330px" }}
          />
        </div>
        <div className="m-6 pb-5">
          <p className="text-xl font-light">
            The Safe Zone is a security and society management software
            application for residential complexes. At this time of alarming
            crime rate, The Safe Zone is a single stop solution to make your
            societies safer than ever.
          </p>
          <div className="mt-10">
            <h1 className="text-xl font-semibold">Services</h1>
            <ul className="font-light text-md mt-3 flex flex-col gap-1">
              <li>Mobile App development</li>
              <li>Application Development</li>
              <li>Product Design</li>
              <li>Devops</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%", // Adjust the width to be responsive
          maxWidth: "550px", // Set a max-width to prevent it from getting too wide
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="m-7"
      >
        <div className="bg-[#ff5842] md:h-96 h-[270px]">
          <div className="p-1">
            <img
              src="https://www.khanakia.com/wp-content/uploads/2020/12/blowfamily-logo.png"
              alt="img-1"
              className="ml-8 mt-4 max-h-8 max-w-full text-left"
            />
          </div>
          <img
            src="https://www.khanakia.com/wp-content/uploads/2020/12/blowkite.png"
            alt="img-2"
            className="m-auto p-7 object-cover" // Ensure the image covers its container
            style={{ maxHeight: "300px", maxWidth: "100%" }} // Make the image responsive
          />
        </div>
        <div className="m-6 pb-5">
          <p className="text-xl font-light">
            BLOW Kitesurfschool was started in 2013 by Toine & Chris, 2 friends
            with a passion for kite surfing. In recent years, this boy's dream
            has grown into one of the most professional, fun and best-known
            kitesurfing schools in the Netherlands.
          </p>
          <div className="mt-10">
            <h1 className="text-xl font-semibold">Services</h1>
            <ul className="font-light text-md mt-3 flex flex-col gap-1">
              <li>Application Development</li>
              <li>Website Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
