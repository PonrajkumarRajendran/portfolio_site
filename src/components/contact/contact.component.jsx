import { useState } from "react";
import "./contact.styles.scss";

const contactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [contactFormFields, setContactFields] = useState(contactFormValues);
  const { fullName, email, subject, message } = contactFormFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFields({ ...contactFormFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    await fetch("https://pure-badlands-08295.herokuapp.com/api/user/message", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactFormFields),
    });
  };
  return (
    <div className="contact-container" id="contact-tab">
      <div className="contact-box">
        <div className="contact-form">
          <span className="contact-form-title">Contact</span>
          <form onSubmit={handleSubmit} className="contact-form-form">
            <div className="contact-form-input-names">
              <div className="contact-form-input-name">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  onChange={handleChange}
                  value={fullName}
                />
              </div>
              <div className="contact-form-input-name">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="E-mail"
                />
              </div>
            </div>

            <div className="contact-form-input-subject">
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>

            <div className="contact-form-input-textarea">
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
            </div>
            <div className="contact-form-button">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
