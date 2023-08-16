import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnquiryForm = () => {
  let location = useLocation().pathname;
  const [loading, setLoading] = useState(false);
  const [buttonTxt, setButtonTxt] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    tel: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState("");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setButtonTxt(false);
    }, 3000);
  }, [buttonTxt]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.username || !formValues.email || !formValues.tel) {
      setButtonTxt(true);
      // UhOhTimer();
      return toast.error(
        "Please fill in your Name, Email and Phone Number. Thank you!"
      );
    }

    if (formErrors != null) {
      setButtonTxt(true);
      // UhOhTimer();
      return toast.error("Please enter a valid email address!");
    }

    if (location === "/") {
      if (!formValues.service) {
        toast.warn("You have not added any service...");
      }
    } else {
      if (!formValues.message) {
        toast.warn("You have not added any message...");
      }
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_dbqxbzf",
        "template_xd956uu",
        form.current,
        "tzMIRTToAGvXUNfY0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast.success("Form submitted successfully.");
          resetForm();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          return toast.error(
            "Submission failed! Please try again after reloading the page. Thank you."
          );
        }
      );
    // console.log(formValues);
  };

  const resetForm = () => {
    setFormValues({
      username: "",
      email: "",
      tel: "",
      service: "",
      message: "",
    });
  };

  // useEffect(()=>{setFormErrors(validate(formValues))},[formValues])

  const validate = (values) => {
    let errors = null;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(values.email)) {
      errors = "Please enter a valid email address";
    }
    return errors;
  };

  const onNameChange = (event) => {
    setFormValues({
      ...formValues,
      username: event.target.value.toUpperCase(),
    });
  };

  const onEmailChange = (event) => {
    let a = event.target.value;
    setFormValues({ ...formValues, email: event.target.value.toLowerCase() });
    if (a === null || a === "") {
      setFormErrors("");
    } else {
      setFormErrors(validate(formValues));
    }
  };

  const onTelChange = (event) => {
    setFormValues({ ...formValues, tel: event.target.value });
  };

  const onServiceChange = (event) => {
    setFormValues({ ...formValues, service: event.target.value.toUpperCase() });
  };

  const onMessageChange = (event) => {
    setFormValues({ ...formValues, message: event.target.value });
  };

  return (
    <>
      <span className="font-medium text-yellow-400 animate-pulse">
        {formErrors}
      </span>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="my-5">
            <input
              className="text-2xl bg-gray-200 caret-sky-500 appearance-none border border-gray-200 rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="inline-full-name"
              type="text"
              name="username"
              value={formValues.username}
              onChange={onNameChange.bind(this)}
              placeholder="YOUR NAME"
              minLength="3"
              autoFocus={location == "/contact"}
            />
          </div>
          <div className="my-6">
            <input
              className="text-2xl bg-gray-200 caret-sky-500 appearance-none border border-gray-200 rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="inline-full-name"
              type="email"
              name="email"
              value={formValues.email}
              onChange={onEmailChange.bind(this)}
              placeholder="EMAIL ADDRESS"
              // required
              onBlur={() => {
                setFormErrors(validate(formValues));
              }}
            />
          </div>
          <div className="my-6">
            <input
              className="text-2xl bg-gray-200 caret-sky-500 appearance-none border border-gray-200 rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="inline-full-name"
              type="text"
              name="tel"
              value={formValues.tel}
              onChange={onTelChange.bind(this)}
              placeholder="PHONE NO."
              title="Please enter your Phone Number"
              pattern="[1-9]{1}[0-9]{9}"
              maxLength="10"
              // required
            />
          </div>
          <div className="my-6">
            <input
              className={` ${
                location === "/" ? "block" : "hidden"
              } text-2xl bg-gray-200 caret-sky-500 appearance-none border border-gray-200 rounded-md w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
              id="inline-full-name"
              type="text"
              name="service"
              value={formValues.service}
              onChange={onServiceChange.bind(this)}
              placeholder="SERVICES NEEDED"
              minLength="3"
            />
          </div>
          <div>
            <textarea
              id="inline-full-name"
              name="message"
              rows="5"
              value={formValues.message}
              onChange={onMessageChange.bind(this)}
              placeholder="How can we help you..."
              className={` ${
                location === "/" ? "hidden" : "block"
              } caret-sky-500 resize-none mb-6 p-2.5 w-full text-2xl bg-gray-200 appearance-none border border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
            ></textarea>
          </div>
        </div>
        <button
          disabled={loading}
          className={` ${loading ? "press" : null} ${
            buttonTxt ? "horizontal-shake" : null
          } group relative inline-block font-medium text-rose-400 focus:outline-none active:text-rose-400`}
          type="submit"
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-rose-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block border uppercase border-current bg-white px-8 py-3">
            {loading ? "Sending..." : buttonTxt ? "Uh-Oh!" : "Submit"}
          </span>
        </button>
      </form>
    </>
  );
};

export default EnquiryForm;
