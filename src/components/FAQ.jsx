import React from "react";
import Accordion from "./Accordion";

function FAQ() {
  return (
    <>
      <Accordion
        title="Application Development"
        content="With over 10 years of experience in building world-class B2B & B2C applications. Our clients range from startups to enterprises and we have worked with a variety of industry verticals including healthcare, adtech, eLearning, data analysis, Fintech & eCommerce. We offer end-to-end custom web development services including ground-up bespoke web development, migration, update, & ongoing maintenance services."
      />
      <Accordion
        title="Website Development"
        content="Having more than 10 years of experience in web development, we serve our clients to deliver complex web applications as well as custom or simple landing pages. Our web development strategies include HTML, CSS, Javascript, Vue.JS, React.JS, WordPress, October CMS, PHP, and various other programming languages & frameworks to make your web development project a robust solution. Excel your web solutions with us!"
      />
      <Accordion
        title="Mobile App Development"
        content="Whether you require native or cross platform apps, our mobile application development services are designed to deliver cutting-edge, customized mobility solutions for your unique business requirements. Our highly experienced developers have built a range of secured and scalable apps for clients in diverse industry verticals. So, you can avail our mobile app development services to leverage the best of it."
      />
      <Accordion
        title="Product Design"
        content="Understanding how important is product design, we work with top-class UX/UI professionals to produce unique user experiences and user interfaces for new product ideas. Some of our design work is noted for its craftsmanship and precision and made it through to win several awards."
      />
      <Accordion
        title="Devops"
        content='Every product requires support and maintenance regardless of the industry and type of product it is. We provide flexible support and maintenance plans, whether it" s a small landing page or a complex web/ mobile solution - we will provide a tailored package just for you. Investing in the right IT support and maintenance plan can save up to 30% in costs. Unreliable, out-of-date code and 3rd party integrations may cause unnecessary down-time or impact your product usability by end customers.'
      />
    </>
  );
}

export default FAQ;
