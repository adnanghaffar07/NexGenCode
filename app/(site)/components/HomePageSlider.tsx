"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageSlider = () => {
  const swiperSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,

    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...swiperSettings}>
      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h1 className="title capitalize" style={{ lineHeight: "1" }}>
            Expert Website Development, SEO Marketing, and SMM Solutions
          </h1>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          At Nexgen Coder, we offer expert website development, management, and SEO marketing services. Our solutions help businesses enhance their online presence, attract more traffic, and engage their audience for sustainable growth.
        </p>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            Professional Website Development and Management for Seamless Performance
          </h2>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          We create custom websites that are fast, responsive, and user-friendly. Our management services ensure your website stays updated, secure, and optimized for continuous peak performance.
        </p>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            Boost Your Visibility with Expert SEO Marketing Services
          </h2>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          Our data-driven SEO strategies improve search rankings, drive organic traffic, and enhance your online visibility. We target relevant keywords to ensure sustainable business growth and success.
        </p>
      </div>
      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
          Engage Your Audience with Strategic Social Media Marketing
          </h2>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
Brand awareness and engagement are boosted through our social media marketing services. Targeted campaigns are created to connect with your audience, driving traffic and fostering lasting relationships for your business.        </p>
      </div>

      {/* <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            Imagine, Code, Automate
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          We are not just a tech company but the architects of your digital
          success. Let&rsquo;s turn your ideas into reality together.
        </div>
      </div> */}
    </Slider>
  );
};

export default HomePageSlider;
