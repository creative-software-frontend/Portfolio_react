import { Link } from "react-router-dom";

function TermsAndConditions() {
return ( <main className="legal-page"> <div className="legal-container"> <Link to="/" className="legal-back-link">← Back to Home</Link>

    <h1>Terms &amp; Conditions</h1>
    <p className="legal-updated">Last updated: October 15, 2026</p>

    <p>
      Welcome to Zarin Tasnim's portfolio website. By accessing this
      website, you agree to the terms outlined below. If you do not
      agree, please discontinue using the website.
    </p>

    <h2>1. Website Purpose</h2>
    <p>
      This website presents my background, skills, projects,
      publications, and professional activities for informational
      and portfolio purposes.
    </p>

    <h2>2. Intellectual Property</h2>
    <p>
      Unless otherwise stated, the original text, design, and
      portfolio content on this website belong to Zarin Tasnim.
      You may not reproduce or redistribute them for commercial
      purposes without permission. Third-party assets remain the
      property of their respective owners.
    </p>

    <h2>3. Acceptable Use</h2>
    <p>
      You agree not to misuse this website, attempt unauthorized
      access, interfere with its operation, or use its content
      for unlawful purposes.
    </p>

    <h2>4. Projects and External Links</h2>
    <p>
      Project descriptions are provided for demonstration and
      informational purposes. Links to external websites are
      provided for convenience. I am not responsible for the
      content or policies of third-party websites.
    </p>

    <h2>5. Contact Form</h2>
    <p>
      When contacting me, please provide accurate information and
      avoid submitting sensitive personal or confidential data.
      Sending a message does not guarantee a response or establish
      a professional agreement.
    </p>

    <h2>6. Disclaimer</h2>
    <p>
      This website is provided on an "as is" and "as available"
      basis. I make no guarantee that it will always be available
      or free of errors.
    </p>

    <h2>7. Limitation of Liability</h2>
    <p>
      To the extent permitted by applicable law, I am not liable
      for losses arising from the use of this website or reliance
      on its informational content.
    </p>

    <h2>8. Changes to These Terms</h2>
    <p>
      These terms may be updated as the website evolves. Continued
      use of the website after an update means you acknowledge
      the revised terms, subject to applicable law.
    </p>

    <h2>9. Contact</h2>
    <p>
      For questions about these terms, email{" "}
      <a href="mailto:zarintsm15@gmail.com">zarintsm15@gmail.com</a>.
    </p>
  </div>
</main>

);
}

export default TermsAndConditions;
