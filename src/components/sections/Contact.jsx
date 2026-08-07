import "./contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Reveal from "../common/Reveal";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message.");
  }

  setLoading(false);
};
const copyEmail = () => {
  navigator.clipboard.writeText("krishnakumarb.dev@gmail.com");
  toast.success("Email copied!");
};

const copyPhone = () => {
  navigator.clipboard.writeText("+919080980481");
  toast.success("Phone number copied!");
};
  return (
    <Reveal>
    <section
      id="contact"
      className="contact section"
    >
      <div className="container-custom">

       <div className="contact-container">

  {/* LEFT */}

  <div className="contact-info">

    <div className="section-header">

    <div className="section-label">

        Contact

    </div>

    <h2 className="section-title">

        Let's Work Together

    </h2>

    <p className="section-subtitle">

        I'm currently looking for Full Stack MERN Developer opportunities,
        internships and freelance projects. Feel free to reach out anytime.

    </p>

</div>

    <div className="contact-items">

    <div className="contact-item">

        <Mail size={20} />

        <div>

            <h4>Email</h4>

            <p
  className="copyable"
  onClick={copyEmail}
>
  krishnakumarb.dev@gmail.com
</p>

        </div>

    </div>

    <div className="contact-item">

        <Phone size={20} />

        <div>

            <h4>Phone</h4>

            <p
  className="copyable"
  onClick={copyPhone}
>
  +91 9080980481
</p>

        </div>

    </div>

    <div className="contact-item">

        <MapPin size={20} />

        <div>

            <h4>Location</h4>

            <p>Madurai, Tamil Nadu, India</p>

        </div>

    </div>

    <div className="contact-item">

        <Github size={20} />

        <div>

            <h4>GitHub</h4>

            <a
  href="https://github.com/krishnakumarb-dev"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
  github.com/krishnakumarb-dev
</a>

        </div>

    </div>

    <div className="contact-item">

        <Linkedin size={20} />

        <div>

            <h4>LinkedIn</h4>

            <a
  href="https://www.linkedin.com/in/krishna-kumar-b-b01278414/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
  linkedin.com/in/krishna-kumar-b-b01278414
</a>

        </div>

    </div>

</div>

  </div>

  {/* RIGHT */}

  <div className="contact-form-card glass">

    <h3>Send a Message</h3>

    <form onSubmit={handleSubmit}>

      <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

      <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  required
/>

      <textarea
  rows="6"
  name="message"
  placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
  required
/>
      <button
  className="primary-btn"
  type="submit"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</button>

    </form>

  </div>

</div>

      </div>
    </section>
    </Reveal>
  );
}

export default Contact;