import React, { useState, useRef, useEffect } from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import emailjs from "emailjs-com";
import ScrollReveal from "scrollreveal"; 
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
    
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_j9xb16k",
          "template_b0n1ouy",
          form.current,
          "ddRD4ZROGx72U-Jj0"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "30px",
      duration: 600,
      delay: 100,
      reset: false, // Do not reset animations
    });

    sr.reveal(".contact-header", { origin: "top" });
    sr.reveal(".contact-info", { origin: "left" });
    sr.reveal(".contact-form-container", { origin: "right" });
  }, []);

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <FaHome />
              <span>Bangalore, Karnataka</span>
            </div>
            <a href="mailto:S.islam20000@gmail.com">
              <div className="contact-item ">
                <MdAttachEmail />
                <span>S.islam20000@gmail.com</span>
              </div>
            </a>
            <a
              href="https://github.com/Sislam824"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-item">
                <BsGithub />
                <span>Github</span>
              </div>
            </a>
            <a href="tel:7454922637">
              <div className="contact-item">
                <BsFillTelephoneFill />
                <span>7454922637</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-saiful-islam-1b4990309"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-item">
                <ImLinkedin />
                <span>Saiful Islam</span>
              </div>
            </a>
          </div>

          <div className="contact-form-container">
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="form-input"
                onChange={handleChange}
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Email"
                className="form-input"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="form-input"
                onChange={handleChange}
              />
              <span className="not-done">
                {notDone && "Please fill all the fields"}
              </span>
              <button type="submit" className="submit-button" disabled={done}>
                Send
              </button>
              <span className="done">{done && "Thanks for Contacting me"}</span>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
