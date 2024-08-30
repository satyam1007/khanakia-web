import React, { useEffect } from "react";
import "./Home.css";
function Home() {
  const pageTitle = "Khanakia - Excellence in Software Development";

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <>
      <div
        className="flex flex-col xl:flex-row justify-between flex-wrap items-center mt-12"
        id="hero"
      >
        <div className="lg:text-left lg:mb-0 lg:mr-12 py-8 pl-6">
          <div className="text-7xl font-bold leading-tight" id="heading">
            <span>Excellence in</span>
            <br />
            <span>software</span>
            <br />
            <span>development</span>
          </div>

          <div className="pt-6 lg:text-left sm:text-sm">
            <span className="text-2xl font-light sm:text-md">
              We help startups and enterprises bring their ideas <br /> to life
              by leveraging design and technology.
            </span>
          </div>
          <div className="pt-10 text-center lg:text-left" id="GetInTouch">
            <button className="text-black border-2 border-black py-3 px-7 hover:bg-black duration-300 hover:text-white rounded-full">
              <a href="/Contact" className="text-xl font-medium">
                Get in Touch
              </a>
            </button>
          </div>
        </div>
        <div className="text-center">
          <div>
            <img src="/software.svg" alt="software" id="software" />
          </div>
        </div>
      </div>
      <div>
        <div className="md:mt-28 mt-0 text-center">
          <div className="relative-container yellow-bg text-center">
            <h1 className="text-6xl relative yellow-bg" id="yellowish-heading">
              Services we provide
            </h1>
          </div>
        </div>
        <div className="md:mt-36 mt-14">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col items-center">
                {/* <Icon name="websiteDesign" size={50} /> */}
                <img src="/websiteDesign.svg" alt="websiteDesign" width={50} />
                <div className="mt-4 text-center">
                  <h1 className="text-xl font-bold pb-4">Website Design</h1>
                  <span className="text-gray-600 font-light tracking-wider">
                    We design stunning websites.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col items-center">
                {/* <Icon name="webApplication" size={50} /> */}
                <img
                  src="/webApplication.svg"
                  alt="webApplication"
                  width={50}
                />
                <div className="mt-4 text-center">
                  <h1 className="text-xl font-bold pb-4">Web Application</h1>
                  <span className="text-gray-600 font-light tracking-wider">
                    We develop applications that scale.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col items-center">
                {/* <Icon name="mobileApplication" size={50} /> */}
                <img
                  src="/mobileApplication.svg"
                  alt="mobileApplication"
                  width={50}
                />
                <div className="mt-4 text-center">
                  <h1 className="text-xl font-bold pb-4">Mobile Application</h1>
                  <span className="text-gray-600 font-light tracking-wider">
                    We develop mobile applications that <br /> users embrace.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col items-center">
                {/* <Icon name="analytics" size={50} /> */}
                <img src="/analytics.svg" alt="analytics" width={50} />
                <div className="mt-4 text-center">
                  <h1 className="text-xl font-bold pb-4">Analytics</h1>
                  <span className="text-gray-600 font-light tracking-wider">
                    We build data that speaks for itself.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col items-center">
                {/* <Icon name="marketing" size={50} /> */}
                <img src="/marketing.svg" alt="marketing" width={50} />
                <div className="mt-4 text-center">
                  <h1 className="text-xl font-bold pb-4">Marketing</h1>
                  <span className="text-gray-600 font-light tracking-wider">
                    We advertise so you do not have to.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div className="flex flex-col items-center">
                {/* <Icon name="devops" size={50} /> */}
                <img src="/devops.svg" alt="devops" width={50} />
                <div className="mt-4 text-center">
                  <h1 className="text-xl font-bold pb-4">Devops</h1>
                  <span className="text-gray-600 font-light tracking-wider">
                    We manage your complete <br /> infrastructure.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:mt-28 mt-12 text-center">
          <div className="relative-container yellow-bg text-center">
            <h1 className="text-6xl relative yellow-bg" id="yellowish-heading">
              Latest Case studies
            </h1>
          </div>
        </div>
        <div className="mt-20">
          <div
            className="flex flex-row flex-wrap justify-around items-center m-auto py-4 px-3 rounded"
            style={{ background: "#4169E1", width: "90%" }}
          >
            <div className="laptop-Services">
              <h1 className="text-3xl md:text-5xl text-white tracking-wider pt-8">
                The UXM
              </h1>
              <p className="text-white text-lg font-light py-8 tracking-wider">
                You can find a great deal on everything from a designer
                <br />
                handbag to a container of auto parts. You’ll enjoy discounts and{" "}
                <br />
                bonuses from all around the world and right in your own
                <br />
                backyard.
              </p>
              <div>
                <h3 className="text-2xl text-white tracking-wider">Services</h3>
                <ul className="flex text-white text-lg py-4">
                  <li className="font-light">Web application</li>
                  <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <li className="font-light">Server Application</li>
                  <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <li className="font-light">Product Design</li>
                </ul>
                <div className="pb-8">
                  <a
                    href="https://theuxm.com/"
                    target="_blank"
                    className="text-white text-lg font-light"
                  >
                    www.theuxm.com
                  </a>
                </div>
              </div>
            </div>
            <div className="laptop">
              <img
                src="https://www.khanakia.com/wp-content/uploads/2020/11/theuxm-banner.png"
                alt="laptop-image"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div
            className="flex flex-row flex-wrap justify-around items-center m-auto py-4 px-3 rounded"
            style={{ background: "#0098E8", width: "90%" }}
          >
            <div className="laptop-Services">
              <h1 className="text-3xl md:text-5xl text-white tracking-wider pt-8">
                Mobilegoo
              </h1>
              <p className="text-white text-lg font-light py-8 tracking-wider">
                Mobilegoo lets you to sell your old mobile handset, tablet, and
                laptops at high price. App
                <br />
                analyse and diagnose automatically hardware and software
                condition of your mobile by
                <br />
                smart technology after analysation provides exact worth of it.
              </p>
              <div>
                <h3 className="text-2xl text-white tracking-wider">Services</h3>
                <ul className="flex text-white text-lg py-4">
                  <li className="font-light">Mobile application</li>
                  <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <li className="font-light">Web Application</li>
                  <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <li className="font-light">Product Design</li>
                </ul>
              </div>
            </div>
            <div className="laptop">
              <img
                src="https://www.khanakia.com/wp-content/uploads/2020/11/mg-banner.png"
                alt="mobilegoo-image"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div
            className="flex flex-row flex-wrap justify-around items-center m-auto py-4 px-3 rounded"
            style={{ background: "#F45024", width: "90%" }}
          >
            <div className="laptop-Services">
              <h1 className="text-3xl md:text-5xl text-white tracking-wider pt-8">
                The Safe Zone
              </h1>
              <p className="text-white text-lg font-light py-8 tracking-wider">
                The Safe Zone is a security and society management software
                application for residential
                <br />
                complexes. At this time of alarming crime rate, The Safe Zone is
                a single stop solution to
                <br />
                make your societies safer than ever.
              </p>
              <div>
                <h3 className="text-2xl text-white tracking-wider">Services</h3>
                <ul className="flex text-white text-lg py-4">
                  <li className="font-light">Mobile application</li>
                  <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <li className="font-light">Web Application</li>
                  <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                  <li className="font-light">Product Design</li>
                </ul>
              </div>
            </div>
            <div className="The-Safe-Zone">
              <img
                src="https://www.khanakia.com/wp-content/uploads/2020/11/tsz-banner.png"
                alt="TheSafeZone-image"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-28 md:mt-28 text-center">
          <div className="relative-container yellow-bg text-center">
            <h1 className="text-6xl relative yellow-bg" id="yellowish-heading">
              Testimonials
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg p-4">
              <div className="mb-4">
                <p className="text-gray-600 leading-8 text-justify">
                  We have worked with khanakia on a number of in-house and
                  client projects. The team have always delivered quality coding
                  projects for us on-time and within budget. I am more than
                  happy to recommend them.
                </p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Joseph Blair</p>
                <p className="text-gray-600 tracking-widest font-light pt-2">
                  HORTITRENDS
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="mb-4">
                <p className="text-gray-600 leading-8 text-justify">
                  I have had the pleasure of working with khanakia over the last
                  few years. Over the years they have gone from a resource to a
                  key part of our company. We look forward to growing our
                  relationship over the years to come.
                </p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Shiva</p>
                <p className="text-gray-600 tracking-widest font-light pt-2">
                  MOBILEGOO
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="mb-4">
                <p className="text-gray-600 leading-8 text-justify">
                  We thank khanakia for the wonderful job in helping us develop
                  our program. Everyone was professional, excellent and hard
                  working. Thanks to them, we look forward to continue working
                  with them in the future.
                </p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Shannon</p>
                <p className="text-gray-600 tracking-widest font-light pt-2">
                  GLAMOURSTUDIO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
