import ScreenHeading from "../../components/ScreenHeading/ScreenHeading";
import { React, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../components/Button/Button";
import "./ContactMe.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xayvdkrr", {
    data: {
      subject: "Someone joined the newsletter",
      pageTitle: function () {
        setName("");
        setEmail("");
        setMessage("");
        if (state.succeeded) {
          alert("Thank you for your message!");
        }
      },
    },
  });
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section id="contact">
      <div className="main-container" id="Contact Me">
        <ScreenHeading
          subHeading={"Let's Keep In Touch"}
          title={"Contact Me"}
        />
        <div className="central-form">
          <div className="col"></div>
          <div className="back-form">
            <p></p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                className="main-input"
                required
                pattern={name}
                id="name"
                type="text"
                onChange={handleName}
                name="name"
                value={name}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="email">Email</label>
              <input
                className="main-input"
                required
                pattern={email}
                id="email"
                type="email"
                onChange={handleEmail}
                name="email"
                value={email}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="main-textarea"
                required
                pattern={message}
                id="message"
                onChange={handleMessage}
                value={message}
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="send-btn">
                <Button type="submit" className="btn primary-btn" name="SEND" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
