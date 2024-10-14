"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { usePathname, useRouter } from "next/navigation"; // Import useRouter hook

// Define the validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact_number: Yup.string()
    .matches(/^[\d+\-\s]{7,20}$/, "Enter a valid contact number.")
    .required("Contact number is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address."
    )
    .required("Email is required"),
  looking: Yup.string().required("Please specify what you are looking for"),
  message: Yup.string(),
});

const initialValues = {
  name: "",
  contact_number: "",
  looking: "",
  email: "",
  message: "",
};

export default function CalendlyProjectForm() {
  const router = useRouter(); // Initialize the useRouter hook
  const currentPath = usePathname();
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false); // State to manage the loading indicator
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: (values, action) => {
      // action.resetForm();
    },
  });

  const pageName = currentPath.split("/").pop();

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    event.preventDefault(); // Prevent default form submission
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");
    setUploading(true); // Start loading state

    if (
      !values.name.length ||
      !values.email.length ||
      !values.contact_number.length ||
      !values.looking.length
    ) {
      setUploading(false); // Stop loading state if fields are empty
      return;
    }

    if (
      errors.name ||
      errors.contact_number ||
      errors.email ||
      errors.looking
    ) {
      setUploading(false); // Stop loading state if there are validation errors
      return;
    }

    const actuallPageName =
      pageName === ""
        ? "Home"
        : pageName
          ?.split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

    // Revalidate the email before submitting
    if (!Yup.string().email().isValidSync(values.email)) {
      setBgColor("bg-red-500");
      setMessage("Please enter a valid email address.");
      setMessageSuccess("w-[100%]");
      setUploading(false); // Stop loading state
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("number", values.contact_number);
      formData.append("looking", values.looking);
      formData.append("message", values.message);
      formData.append("pagename", actuallPageName || "Home");
      setMessage("Submitting form...");

      setMessageSuccess("w-[10%]");
      const response = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Push event to dataLayer for GTM
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "formSubmission",
          form: "contactForm",
        });

        resetForm();
      } else {
        setBgColor("bg-red-500");
        setMessage("Message not submitted!");
        setMessageSuccess("w-[100%]");
      }
    } catch (error) {
      setBgColor("bg-red-500");
      setMessage("Message not submitted!");
      setMessageSuccess("w-[100%]");
      console.error("Error:", error);
    } finally {
      setUploading(false); // Stop loading state
      setTimeout(() => {
        setMessage("");
      }, 8000);
    }
  };

  return (
    <div
      className="flex justify-center items-center px-10 pt-6 pb-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[24px] max-md:px-5 border border-slate-300"
      id="contact-box"
    >
      <div className="flex flex-col mt-2 w-full max-w-[700px] max-md:max-w-full">
        <form onSubmit={handleCombinedSubmit}>
          <div className="">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm  w-full text-black text-sm placeholder-black"
              placeholder={"Name"}
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Contact Number"}
              name="contact_number"
              value={values.contact_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.contact_number && touched.contact_number ? (
              <p className="form-error">{errors.contact_number}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Email"}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"What are you looking for?"}
              name="looking"
              value={values.looking}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.looking && touched.looking ? (
              <p className="form-error">{errors.looking}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <textarea
              className="border-2 justify-center items-start px-4 py-3 rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black resize-none  break-words"
              placeholder={"Your Message"}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              cols={4}
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className={`self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center items-center rounded-xl py-2 ${uploading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            {uploading ? (
              <span className="loader"></span> // You can use a spinner class here
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
