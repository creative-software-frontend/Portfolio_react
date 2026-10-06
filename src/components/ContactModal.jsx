function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <div className="contact-modal-content">
          <div className="contact-modal-heading">
            <span className="contact-modal-label">LET'S CONNECT</span>

            <p>
              Have an idea, project or opportunity? I'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="fullName">Full Name</label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="purpose">Purpose</label>

              <select id="purpose">
                <option value="project">Project Collaboration</option>
                <option value="job">Job Opportunity</option>
                <option value="freelance">Freelance Work</option>
                <option value="internship">Internship Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your idea, project, or opportunity..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;