import { React, useState } from "react";

const ContactForm = () => {
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          name: "",
          email: "",
          service: "",
          tel: "",
          message: "",
        });
      });
  };

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    service: "",
    tel: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="App1">
      <form
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={submitEmail}
      >
        <fieldset>
          <legend>React NodeMailer Contact Form</legend>
          <input
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <input
            placeholder="Service"
            onChange={handleStateChange}
            name="service"
            value={mailerState.service}
          />
          <input
            placeholder="Telephone"
            onChange={handleStateChange}
            name="tel"
            value={mailerState.tel}
          />
          <textarea
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button>Send Message</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
