import { Link } from "react-router-dom";

function PrivacyPolicy() {
return ( <main className="legal-page"> <div className="legal-container"> <Link to="/">← Back to Home</Link>

    <h1>Privacy Policy</h1>
    <p>Last updated: October 15, 2026</p>

    <h2>Information Collection</h2>
    <p>
      If you contact me, I may collect your name, email address, and
      message to respond to your inquiry.
    </p>

    <h2>Information Usage</h2>
    <p>
      Your information is used to respond to messages and discuss
      professional opportunities.
    </p>

    <h2>Information Sharing</h2>
    <p>
      I do not sell your personal information. Third-party services
      may process information when necessary.
    </p>

    <h2>External Links</h2>
    <p>
      This website may link to GitHub, LinkedIn, and other websites.
      Their privacy policies apply to their services.
    </p>

    <h2>Contact</h2>
    <p>
      For questions, email to : {" "}
      <a href="mailto:dilouarbd@gmail.com">
        dilouarbd@gmail.com
      </a>.
    </p>
  </div>
</main>
);
}

export default PrivacyPolicy;