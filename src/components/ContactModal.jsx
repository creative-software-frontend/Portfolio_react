import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactModal({ isOpen, onClose }) {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error.status, error.text);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <h2>Let's Connect</h2>
        <p>Have a project or opportunity in mind? Send me a message.</p>

        <form
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="purpose">Purpose</label>
            <select id="purpose" name="purpose" required defaultValue="">
              <option value="" disabled>
                Select a purpose
              </option>
              <option value="Project Collaboration"> Project Collaboration </option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="Ebook">Ebook</option>
              <option value="Training">Training</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            />
          </div>

          {status === "success" && (
            <p className="contact-feedback success" role="status">
              Message sent successfully! Thank you for contacting me.
            </p>
          )}

          {status === "error" && (
            <p className="contact-feedback error" role="alert">
              Sorry, your message could not be sent. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;