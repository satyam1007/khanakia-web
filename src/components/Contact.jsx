import React, { useEffect } from "react";

function Contact() {
  const pageTitle = "Contact - Khanakia - Excellence in Software Development";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <>
      <div
        className="m-6 mt-20 flex items-center justify-between flex-wrap gap-10 mb-28"
        id="contact-form"
      >
        <div>
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold lg:font-semibold">
              Let's build future <br /> together
            </h1>
          </div>
          <div className="py-8 max-w-lg">
            <form className="mt-10">
              <div className="mb-4">
                <label className="text-lg font-light block">Full Name</label>
                <input
                  className="border border-gray-300 py-2 px-3 rounded w-full"
                  type="text"
                  name="your-name"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <div className="w-full">
                  <label className="text-lg font-light block">Email</label>
                  <input
                    className="border border-gray-300 py-2 px-3 rounded w-full"
                    type="email"
                    name="your-email"
                  />
                </div>
                <div className="w-full">
                  <label className="text-lg font-light block">
                    Phone number
                  </label>
                  <input
                    className="border border-gray-300 py-2 px-3 rounded w-full"
                    type="tel"
                    name="your-phone"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-lg font-light block">
                  Tell us about your challenge
                </label>
                <textarea
                  name="your-message"
                  className="border border-gray-300 py-2 px-3 rounded w-full"
                  rows="4"
                ></textarea>
              </div>
            </form>
          </div>
          <div>
            <button
              className="text-black border-2 border-black py-2 px-10 hover:bg-black duration-300 hover:text-white rounded-full text-xl font-medium"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

        <div>
          <div>
            <img src="/contact.svg" alt="contact" width={600} />
          </div>
        </div>
      </div>

      <div
        style={{ background: "rgb(255, 242, 97)" }}
        className="p-8 md:p-16 lg:p-20"
      >
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">Our Markets</h1>
          <p className="text-base md:text-xl mt-4 font-light">
            We’ve helped startups and big companies deliver meaningful
            experiences to <br /> users all over the world.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src="/map.svg" alt="map" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default Contact;
