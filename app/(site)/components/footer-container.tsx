"use client";
import { getCpyrighttext } from "@/sanity/sanity-utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FooterContainer() {
  // const cpyrighttext = await getCpyrighttext();

  const linkUrl = "/headless-cms";
  const linkUrlWeb = "/web-app-development";
  const linkUrlApp = "/mobile-app-development";
  const linkUrlAutomate = "/qa-web-testing";
  const linkUrlAI = "/ai-services";
  const linkUrlBuisness = "/automation-integration";

  const [showAddress, setAddress] = useState(true);

  const handleClick = () => {
    setAddress(!showAddress);
  };

  const currentPath = usePathname();

  useEffect(() => {
    setAddress(true);
  }, [currentPath]);

  const socialIcons = [
    {
      src: "/facebook-icon.svg",
      alt: "facebook",
      link: "https://www.facebook.com/Codeautomationai/",
    },
    {
      src: "/instagram-icon.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/codeautomation.ai/",
    },
    {
      src: "/twitter-new.svg",
      alt: "twitter",
      link: "https://twitter.com/codeautomation",
      className: "rounded-3xl",
    },
    {
      src: "/linkedin-icon.svg",
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/codeautomationai/",
    },
  ];

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Footer.png')" }}
      ></div>
      <div className=" relative flex flex-col items-center py-5 w-full max-md:max-w-full pt-10">
        <div className="w-full max-w-[1582px] lg:px-10 px-5  max-md:max-w-full grid xl:grid-cols-4 md:grid-cols-3 gap-5">
          <div className="flex flex-col xl:col-span-2 md:col-span-3 xl:pr-36">
            <div className="grid xl:grid-cols-1 md:grid-cols-2 gap-6 text-lg font-light text-white max-md:mt-10 self-start">
              <div>
                <div className="flex self-start">
                  <img
                    loading="lazy"
                    src="/White Logo.png"
                    className="max-w-full w-[250px] max-md:ml-2.5"
                    alt="logo"
                  />
                </div>

                <div className="mt-5 max-w-[330px]">
                  Let&rsquo;s embark on a journey of innovation and excellence
                  together.
                </div>
              </div>
              <div>
                <div className="container mt-7 flex justify-start items-start">
                  <section className="grid grid-cols-4 gap-3 ">
                    {socialIcons.map((icon, index) => (
                      <div
                        key={index}
                        // href={icon.link}
                        // target="_blank"
                        // rel="noopener noreferrer"
                      >
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          width={40}
                          height={40}
                          className="rounded-3xl object-cover w-10 h-10"
                        />
                      </div>
                    ))}
                  </section>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col flex-end">
            <div className="flex flex-col grow text-white max-md:mt-10 items-center xl:ml-8 flex-1 px-5 text-xl relative z-10 self-start">
              <div className="text-2xl font-medium self-start">Solutions</div>
              <div className="mt-6 text-base font-light flex flex-col gap-5">
                <div
                  // href={`/services/${linkUrl}`}
                  className="hover:underline my-auto inline-block"
                >
                  Digital Marketing
                </div>
                <div
                  // href={`/services/${linkUrlWeb}`}
                  className="hover:underline my-auto inline-block"
                >
                  Web Development
                </div>
                <div
                  // href={`/services/${linkUrlApp}`}
                  className="hover:underline my-auto inline-block"
                >
                  App Development
                </div>
                <div
                  // href={`/services/${linkUrlAutomate}`}
                  className="hover:underline my-auto inline-block"
                >
                  E-commerce Solutions
                </div>
                <div
                  // href={`/services/${linkUrlAI}`}
                  className="hover:underline my-auto inline-block"
                >
                  Brand Strategy
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col ">
            <div className="text-white max-md:mt-10  flex flex-col items-center xl:ml-8 flex-1 px-5 text-xl relative z-10 self-start">
              <div className="text-2xl font-medium self-start">About Us</div>
              <div className="mt-6 text-base font-light flex  flex-col gap-5">
                <Link
                  href={`/case-studies`}
                  className="hover:underline my-auto inline-block"
                >
                  Case Studies
                </Link>
                <Link
                  href={`/blogs`}
                  className="hover:underline my-auto inline-block"
                >
                  Blogs
                </Link>
                <Link
                  href={`/career`}
                  className="hover:underline my-auto inline-block"
                >
                  Careers
                </Link>
                <Link
                  href={`/lifeatca`}
                  className="hover:underline my-auto inline-block"
                >
                  Life at CA
                </Link>
                <Link
                  href={"/partnership-program"}
                  className="hover:underline my-auto inline-block"
                >
                  Partner with Us
                </Link>
                <Link
                  href="mailto:hr@codeautomation.ai"
                  className="hover:underline my-auto inline-block"
                >
                  hr@codeautomation.ai
                </Link>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col flex-end">
            <div className="flex flex-col text-white max-md:mt-10 self-start space-y-5">
              <div className="text-2xl font-medium leading-6">Contact Us</div>
              <div
                className="text-lg font-light leading-5 self-start space-y-5"
                style={{ fontSize: "16px" }}
              >
                <a
                  href="tel:+18505584691"
                  className="hover:underline my-auto inline-block"
                >
                  <div className="flex flex-row gap-3">
                    <Image
                      src="/USA_Flag.png"
                      alt="USA-Flag-Icon"
                      width={20}
                      height={20}
                      className="md:max-h-10 object-cover"
                    />
                    <span className="font-light">850.558.4691</span>
                  </div>
                </a>

                <div>
                  <a
                    href="tel:+44-(20)-39972588"
                    className="hover:underline my-auto inline-block"
                  >
                    <div className="flex flex-row gap-3">
                      <Image
                        src="/uk-flag.png"
                        alt="UK-Flag-Icon"
                        width={21}
                        height={20}
                        className="md:max-h-10 object-cover rounded-md"
                      />
                      <span className="font-light">+44-(20)-39972588</span>
                    </div>
                  </a>

                </div>

                <div className="flex flex-row gap-3">
                  <Image
                    src="/mail.png"
                    alt="mail"
                    width={20}
                    height={20}
                    className="md:max-h-10 object-cover"
                  />
                  <a
                    href="mailto:launch@nexgencode.ai"
                    className="hover:underline my-auto inline-block"
                  >
                   launch@nexgencode.ai
                  </a>
                </div>

                <div className="flex flex-row gap-2 items-start">
                  <Image
                    src="/USA_Flag.png"
                    alt="USA-Flag-Icon"
                    width={25}
                    height={25}
                    className="md:max-h-10 object-cover"
                  />
                  <span className="font-light">
                    1755 Park St, Office 254, Suite 200 Office Evolution Naperville, IL USA 60543                  </span>
                </div>

                <div className="flex flex-row gap-2 items-start pb-2">
                  <Image
                    src="/Canada-Flag.png"
                    alt="Canada-Flag-Icon"
                    width={25}
                    height={25}
                    className="object-cover"
                  />
                  <span className="font-light">
                    201 N AZALEA LANE, Orleans, Ontario CA K4A4R5
                  </span>
                </div>

                {/* {showAddress ? (
                  <span
                    className="cursor-pointer font-semibold ml-8"
                    onClick={handleClick}
                  >
                    See more...
                  </span>
                ) : (
                  <div className="flex flex-row gap-2.5 items-start">
                    <Image
                      src="/Pakistan-Flag.png"
                      alt="Pakistan-Flag-Icon"
                      width={25}
                      height={25}
                      className="object-cover"
                    />
                    <span className="font-light">
                      A 1/11 P, Block P Model Town, Lahore
                    </span>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-7 w-full bg-white min-h-[1px] mx-auto" />
        <div className="mt-5 text-md font-light leading-5 text-center text-white max-md:mt-10">
          {/* {cpyrighttext.map((cpyrighttext) => (
            <div className="cpyrighttext" key={cpyrighttext._id}>
              {cpyrighttext.name}
            </div>
          ))} */}
          Copyright @2024 - by NexGenCode
        </div>
      </div>
    </div>
  );
}
