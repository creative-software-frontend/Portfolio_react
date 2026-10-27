
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import dilouarPhoto from "../assets/dilouar-hossain.jpg";
import laptopPic from "../assets/laptop.png";
import BkashPaymentModal from "../components/BkashPaymentModal";
import bkashLogo from "../assets/bkash.jpg";
import nagadLogo from "../assets/nagad.png";
import NagadPaymentModal from "../components/NagadPayment";

const modules = [
  {
    icon: "📈",
    title: "Module 1: Introduction to Digital Marketing & AI",
    topics: ["What is Digital Marketing?", "AI in Marketing & Benefits", "Types of AI: ML, NLP, Generative AI, Predictive Analytics"],
  },
  {
    icon: "✍️",
    title: "Module 2: AI in Content Creation & Copywriting",
    topics: ["AI Tools: ChatGPT, Jasper, Copy.ai", "Prompt Engineering Basics", "Best Practices: Ethics, Originality, SEO"],
  },
  {
    icon: "📱",
    title: "Module 3: AI in Social Media Marketing",
    topics: ["Smart Scheduling & Automation", "AI-powered Audience Insights", "AI Image & Video Tools: Canva AI, Lumen5, Pictory"],
  },
  {
    icon: "📣",
    title: "Module 4: Meta Paid Ads",
    topics: ["AI Based Audience Targeting", "Re-marketing & Custom Audience", "Campaign Monitoring & Scaling"],
  },
  {
    icon: "📣",
    title: "Module 5: Google Paid Ads",
    topics: ["High Quality Traffic (Ready-to-Buy Users)", "Budget Control & Transparent Reporting", "Predictive Performance Forecasting"],
  },
  {
    icon: "🎬",
    title: "Module 6: AI Based YouTube Video Optimization",
    topics: ["YouTube AI Optimization Tools", "AI-Based Audience Targeting", "AI Caption & Script Optimization"],
  },
  {
    icon: "🔍",
    title: "Module 7: AI in SEO & SEM",
    topics: ["AI Keyword Research: Ubersuggest, Frase, Semrush AI", "Content Optimization: SurferSEO, NeuronWriter", "Google & Meta Ads with AI Targeting"],
  },
  {
    icon: "📧",
    title: "Module 8: Email Marketing & Chatbots",
    topics: ["AI Email Personalization", "Subject Line Optimization", "AI Chatbots: Tidio, ManyChat, Chatfuel"],
  },
  {
    icon: "📊",
    title: "Module 9: Analytics & Predictive Marketing with AI",
    topics: ["AI in Google Analytics & Meta Insights", "Customer Segmentation & CLV Prediction", "A/B Testing with AI Insights"],
  },
  {
    icon: "🎨",
    title: "Module 10: AI Tools for Design & Video",
    topics: ["Graphics: Canva AI, Adobe Firefly", "AI Video Editors: Runway ML, Pictory, Synthesia", "Voice-over & Avatar Tools"],
  },
  {
    icon: "🏆",
    title: "Module 11: Capstone Project & Certification",
    topics: ["Complete Marketing Funnel Project using AI", "Peer Review & Instructor Feedback", "Certificate of Completion"],
  },
  {
    icon: "💼",
    title: "Module 12: Career Guideline",
    topics: ["Discussion of what you can do as a digital marketer", "Difference between job and business", "Discussing the full benefits of doing business", "Job references and career guidance"],
  },
];

const courseFees = [
  ["ডোমেইন নাম (১ বছরের জন্য)", "2,000 ৳"],
  ["হোস্টিং (১ বছরের জন্য)", "1,500 ৳"],
  ["রেসপনসিভ ওয়েবসাইট", "25,000 ৳"],
  ["মেটা বিজ্ঞাপন অ্যাকাউন্ট", "5,000 ৳"],
  ["ইনভেস্টমেন্ট এর সুবিধা", "50,000 ৳"],
];

const gifts = [
  ["ব্র্যান্ডিং সহ টিশার্ট", "500 ৳"],
  ["প্রিন্টেড মাগ", "500 ৳"],
  ["ব্র্যান্ডিং সহ ক্যাপ", "300 ৳"],
  ["ক্যারিয়ার সম্পর্কিত ১০টি পিডিএফ বই", "10,000 ৳"],
  ["প্রোডাক্ট সোর্সিং এর সুবিধা", "5,000 ৳"],
];

const WHATSAPP_URL = "https://wa.me/8801978866933";

function Training() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isNagadPaymentOpen, setIsNagadPaymentOpen] = useState(false);

  const scrollToPayment = () => {
    document.getElementById("training-payment")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="dm-training">
      <header className="dm-hero">
        <span className="dm-offer">✨ Limited Time Offer</span>
        <h1>Digital Marketing <span>With AI</span></h1>
        <p>স্মার্ট মার্কেটিং ও দ্রুত সফলতা, সবই সম্ভব AI-এর সাথে</p>
      </header>

      <main>
        <section className="dm-section dm-profile-section">
          <div className="dm-section-heading">
            <h2>👨‍🏫 কোর্সের বিস্তারিত</h2>
            <p>১০+ বছরের অভিজ্ঞতা নিয়ে আপনার পাশে</p>
          </div>

          <div className="dm-profile-layout">
            <article className="dm-trainer-card">
              <img className="dm-trainer-photo" src={dilouarPhoto} alt="Engineer Dilouar Hossain" />
              <div className="dm-trainer-info">
                <div className="dm-badges">
                  <span>✨ Expert Trainer</span>
                  <span>🏆 10+ Years</span>
                  <span>👥 5000+ Students</span>
                  <span>📘 10 PDF Book</span>
                  <span>🤖 AI Based Course</span>
                  <span>💻 Giveaway Laptop</span>
                </div>
                <div className="dm-stats">
                  <div><strong>10+</strong><span>Years Experience</span></div>
                  <div><strong>5000+</strong><span>Students Trained</span></div>
                </div>
                <h3>Engineer Dilouar Hossain</h3>
                <p className="dm-trainer-role">Digital Marketing Trainer | 10+ Years Experience</p>
                <p className="dm-trainer-bio">Founder at Zero Degree venture & Golden Life Business Ltd</p>
                <a
                  className="dm-gradient-button"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📞 ইন্সট্রাক্টরের সাথে কথা বলুন
                </a>
              </div>
            </article>

            <aside className="dm-schedule-card">
              <h3>🗓️ ক্লাসের সময়সূচী</h3>
              <div className="dm-schedule-item">
                <strong>🎯 Batch No-20251101</strong>
                <span>Class Start: 01 November 2026</span>
              </div>
              <div className="dm-schedule-item">
                <strong>⏰ Class Time</strong>
                <span>9PM to 11PM (Night)</span>
                <span>Sunday, Tuesday, Thursday</span>
              </div>
              <div className="dm-schedule-item">
                <strong>📚 Course Duration</strong>
                <span>12 Weeks | Online</span>
                <span>Beginner to Advanced</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="dm-section">
          <div className="dm-section-heading">
            <h2>💰 কোর্স ফি ও সুবিধা</h2>
            <p>একবার ইনভেস্ট, আজীবন সক্ষমতা</p>
          </div>

          <div className="dm-fee-layout">
            <article className="dm-price-card">
              <h3>💰 কোর্স ফি</h3>
              <p>সীমিত সময়ের জন্য</p>
              <div className="dm-price">৳ ৯,৯৯৯</div>
              <p className="dm-discount-note">এককালীন পেমেন্টে <strong>৯০% ছাড়</strong></p>
              <p className="dm-price-description">লাইফটাইম এক্সেস এবং আপডেটেড কোর্স কনটেন্ট</p>
              <div className="dm-payment-logos">
                <button type="button" onClick={() => setIsPaymentOpen(true)}>
                  <img src={bkashLogo} alt="Pay with bKash" />
                </button>

                <button
                  type="button"
                  className="dm-payment-logo-button"
                  onClick={() => setIsNagadPaymentOpen(true)}
                  aria-label="Open Nagad payment"
                >
                  <img src={nagadLogo} alt="Nagad" />
                </button>
              </div>
              <button className="dm-enroll-button" onClick={scrollToPayment}>🚀 এখনই এনরোল করুন →</button>
              <small>🔒100% Secure Payment | Support: 0949 866 933</small>
            </article>

            <article className="dm-benefits-card">
              <div>
                <h3>🎁 কোর্সে যা ফ্রি পাবেন</h3>
                <ul>{courseFees.map(([name, price]) => <li key={name}><span>{name}</span><strong>{price}</strong></li>)}</ul>
              </div>
              <div>
                <h3>🎯 বিশেষ গিফট প্যাক</h3>
                <ul>{gifts.map(([name, price]) => <li key={name}><span>🎁 {name}</span><strong>{price}</strong></li>)}</ul>
              </div>
              <h3 className="dm-gift-total">💰 সর্বমোট গিফটের মূল্য: ১,০০,০০০</h3>
            </article>
          </div>

          <article className="dm-laptop-banner">
            <div>
              <h2>লটারির <span>পুরস্কার</span></h2>
              <p>সেরাদের জন্য আকর্ষণীয় পুরস্কার ল্যাপটপের মাধ্যমে দেওয়া হবে।</p>

              <button type="button" className="enroll-button">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU1PUUmjNosTOnnQmg4pCF9z6ifH7h2aJoMwIHYtxTr-KPuA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  অংশগ্রহণ করুন
                </a>
              </button>
            </div>
            <img className="dm-laptop-img" src={laptopPic} alt="Laptop giveaway" />
          </article>
        </section>

        <section className="dm-section dm-modules-section" id="training-modules">
          <div className="dm-section-heading">
            <h2>📚 কোর্স মডিউল</h2>
            <p>AI-পাওয়ার্ড ডিজিটাল মার্কেটিং এর সম্পূর্ণ কারিকুলাম</p>
          </div>

          <div className="dm-module-grid">
            {modules.map((module) => (
              <article className="dm-module-card" key={module.title}>
                <span className="dm-module-icon">{module.icon}</span>
                <h3>{module.title}</h3>
                <ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </article>
            ))}
          </div>

          <button className="dm-gradient-button dm-all-modules" onClick={scrollToPayment}>
            🚀 সম্পূর্ণ কারিকুলাম উন্মোচন করুন
          </button>
        </section>

        <section className="dm-payment-section" id="training-payment">
          <div className="dm-payment-panel">
            <div className="dm-enroll-info">
              <h2>🚀 এখনই এনরোল করুন</h2>
              <p>বিস্তারিত জানতে কল করুন — <strong>0949 866 933</strong></p>
              <div className="dm-enroll-actions">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU1PUUmjNosTOnnQmg4pCF9z6ifH7h2aJoMwIHYtxTr-KPuA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enroll-button"
                >
                  এনরোল করুন
                </a>
                <a
                  className="dm-whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ● WhatsApp
                </a> </div>
            </div>
            <div className="dm-payment-info">
              <h2>💰 কিভাবে Payment করবেন</h2>
              <div className="dm-payment-options">
                <button
                  type="button"
                  className="pay-btn pay-bkash"
                  onClick={() => setIsPaymentOpen(true)}
                >
                  <span className="pay-logo">
                    <img src={bkashLogo} alt="bKash" />
                  </span>
                  <span className="pay-text">এ পেমেন্ট করুন</span>
                </button>

                <button
                  type="button"
                  className="pay-btn pay-nagad"
                  onClick={() => setIsNagadPaymentOpen(true)}
                >
                  <span className="pay-logo">
                    <img src={nagadLogo} alt="Nagad" />
                  </span>
                  <span className="pay-text">Nagad এ পেমেন্ট করুন</span>
                </button>
              </div>
              <p>❓ পেমেন্ট নিয়ে সমস্যা হলে কল করুন: <strong>0949 866 933</strong></p>
            </div>
          </div>
          {isPaymentOpen && (
            <BkashPaymentModal
              isOpen={isPaymentOpen}
              onClose={() => setIsPaymentOpen(false)}
              onNagadClick={() => {
                setIsPaymentOpen(false);
                setIsNagadPaymentOpen(true);
              }}
            />
          )}

          {isNagadPaymentOpen && (
            <NagadPaymentModal
              isOpen={isNagadPaymentOpen}
              onClose={() => setIsNagadPaymentOpen(false)}
              onBkashClick={() => {
                setIsNagadPaymentOpen(false);
                setIsPaymentOpen(true);
              }}
            />
          )}

          <div className="dm-direct-contact">
            <h3>📞 সরাসরি কথা বলুন</h3>
            <p>📱 0949 866 933 <span>✉️ info@zerodegree.com.bd</span> 🌐 সময়: ৯টা - রাত ১১টা</p>
          </div>
        </section>
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default Training;