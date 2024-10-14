"use client";

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left text-gray-800 text-lg font-medium focus:outline-none"
      >
        <span>{title}</span>
        <svg
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="22"
          height="22"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="py-2 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
}

export default function CoreExpertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Digital Marketing",
      content: "Comprehensive strategies designed to enhance online visibility and engage audiences through SEO, SMM, and content marketing.",
    },
    {
      title: "Web Development",
      content: "Custom websites are developed to be responsive, user-friendly, and optimized for performance, ensuring a seamless experience for all users.",
    },
    {
      title: "App Development",
      content: "Innovative mobile and web applications built to meet specific business needs, focusing on functionality and user experience.",
    },
    {
      title: "E-commerce Solutions",
      content: "Tailored e-commerce platforms that streamline online shopping experiences, featuring secure payment integrations and effective product management.",
    },
    {
      title: "Brand Strategy",
      content: "Development of strong brand identities through targeted messaging, design, and positioning to resonate with your target audience.",
    }
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto md:px-4">
      <div className="flex flex-col text-black">
        <h2 className="xl:text-4xl lg:text-3xl text-3xl font-medium">
          Our Core Expertise
        </h2>
        <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 xl:pr-36 tracking-normal">
          <p>
          Hire from our team of over 70 dedicated experts in digital marketing, web development, and app development. With experience in various industries and a focus on your specific needs, we deliver tailored solutions that drive results. At Nexgen Coder, we are committed to providing high-quality services that align with your goals and enhance your online presence.          </p>
        </div>
        <h2 className="md:text-2xl text-lg mt-6 font-medium">
          Our expertise includes:
        </h2>
        <div className="mt-4 min-h-[370px]"> {/* Set minimum height for the accordion container */}
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
