"use client";

import { useState } from "react";

// Define the type for the technology categories
type TechnologyCategory =
  | "mobile-development"
  | "web-development"
  | "seo-services"
  | "smm-services"
  | "e-commerce-platforms";

// Define the structure of the technologies data
const technologiesData: Record<
  TechnologyCategory,
  { name: string; logo: string }[]
> = {
  "mobile-development": [
    { name: "Flutter", logo: "/flutter.png" },
    { name: "React Native", logo: "/React.png" },
    { name: "Swift", logo: "/swift.svg" },
    { name: "Kotlin", logo: "/kotlin.svg" },
    { name: "Xcode", logo: "/Xcode.png" },
    { name: "Android Studio", logo: "/android-studio.png" },
    { name: "Firebase", logo: "/firebase.png" },

  ],
  "web-development": [
    { name: "HTML", logo: "/html.svg" },
    { name: "CSS", logo: "/css.png" },
    { name: "JavaScript", logo: "/javascript.svg" },
    { name: "Node.js", logo: "/node-js.svg" },
    { name: "PHP", logo: "/php.png" },
    { name: "Python", logo: "/python.svg" },
    { name: "React.js", logo: "/React.png" },
    { name: "Angular", logo: "/angular.svg" },
    { name: "Laravel", logo: "/laravel.png" },
    { name: "Git", logo: "/git.svg" },
    { name: "Webpack", logo: "/webpack.png" },
    { name: "Visual Studio Code", logo: "/vscode.png" },
  ],
  "seo-services": [
    { name: "SEMrush", logo: "/semrush.png" },
    { name: "Ahrefs", logo: "/ahref.png" },
    { name: "Google Analytics", logo: "/google-analytics.svg" },
    { name: "Moz", logo: "/moz.png" },
    { name: "Yoast SEO", logo: "/yoast.png" },
  ],
  "smm-services": [
    { name: "Hootsuite", logo: "/hootsuite.png" },
    { name: "Buffer", logo: "/buffer.png" },
    { name: "Sprout Social", logo: "/sprout.png" },
    { name: "Canva", logo: "/canva.png" },
    { name: "Facebook Ads Manager", logo: "/facebook.png" },

  ],
  "e-commerce-platforms": [
    { name: "Shopify", logo: "/shopify.svg" },
    { name: "WooCommerce", logo: "/woocommerce.svg" },
    { name: "Magento", logo: "/magento.svg" },
    { name: "BigCommerce", logo: "/bigcommerce.svg" },
    { name: "Shopify CLI", logo: "/shopify.svg" },
    { name: "WooCommerce Analytics", logo: "/WooCommerce Analytics.png" },
  ],
};

const TechnologiesSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<TechnologyCategory>("mobile-development");

  const handleButtonClick = (category: TechnologyCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#1D92FB] bg-opacity-10">
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-16 md:py-16">
        <h2 className="w-full xl:text-4xl text-2xl font-medium text-black pb-6 md:pb-10 text-center">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center md:mb-12 mb-8 gap-4">
          {Object.keys(technologiesData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-lg ${
                selectedCategory === category
                  ? "bg-[#1D92FB] text-white"
                  : "bg-[#D9D9D9] text-black"
              } hover:bg-[#1D92FB] border hover:text-white`}
              onClick={() => handleButtonClick(category as TechnologyCategory)}
            >
              {category.replace(/-/g, " ").toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {technologiesData[selectedCategory].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/6"
            >
              <img src={tech.logo} alt={tech.name} className="h-12 mb-2" />
              <span className="text-sm md:text-md font-md">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
