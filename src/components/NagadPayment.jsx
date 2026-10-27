
import { useEffect } from "react";
import nagadLogo from "../assets/nagad.png";
import bkashLogo from "../assets/bkash.jpg";

const NAGAD_ACCOUNT = "01898879001";
const SUPPORT_PHONE = "01978866933";

const WHATSAPP_URL = `https://wa.me/88${SUPPORT_PHONE}?text=${encodeURIComponent(
    'আমি "DM Course" এর পেমেন্ট কনফার্ম করতে চাই।'
)}`;

function NagadPaymentModal({ isOpen, onClose, onBkashClick }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const copyNumber = async () => {
        try {
            await navigator.clipboard.writeText(NAGAD_ACCOUNT);
            window.alert("Nagad নম্বর কপি হয়েছে!");
        } catch {
            window.prompt("Nagad নম্বর কপি করুন:", NAGAD_ACCOUNT);
        }
    };

    const steps = [
        ["Nagad App ওপেন করুন", "আপনার Nagad মোবাইল অ্যাপ্লিকেশন ওপেন করুন"],
        ["Payment নির্বাচন করুন", '"Merchant Pay" অপশনে ক্লিক করুন'],
        ["নম্বর ও টাকা দিন", ""],
        ["রেফারেন্স দিন", 'রেফারেন্সে "DM Course" লিখুন'],
    ];

    return (
        <div className="nagad-modal-overlay" onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
        }}>
            <section
                className="nagad-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="nagad-modal-title"
            >
                <button className="nagad-modal-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
                <div className="nagad-modal-topbar">
                    <button
                        type="button"
                        className="nagad-back-home"
                        onClick={onClose}
                    >
                        ← Back to Training
                    </button>
                </div>
                <header className="nagad-modal-header">
                    <h1 id="nagad-modal-title">Nagad Payment</h1>
                    <p>সহজ ৪ স্টেপে পেমেন্ট সম্পন্ন করুন</p>
                </header>

                <div className="nagad-modal-grid">
                    <article className="nagad-modal-instructions">
                        <div className="nagad-modal-brand">
                            <img src={nagadLogo} alt="Nagad" />
                            <div>
                                <h2>Nagad পেমেন্ট</h2>
                                <p>কোর্স ফি: ৳ ৯,৯৯৯</p>
                            </div>
                        </div>

                        <div className="nagad-modal-steps">
                            {steps.map(([title, description], index) => (
                                <div className="nagad-modal-step" key={title}>
                                    <span className="nagad-modal-step-number">{index + 1}</span>
                                    <div>
                                        <h3>{title}</h3>
                                        {description && <p>{description}</p>}

                                        {index === 2 && (
                                            <button className="nagad-modal-number" onClick={copyNumber}>
                                                <strong>{NAGAD_ACCOUNT}</strong>
                                                <span>টাকা: ৳ ৯,৯৯৯</span>
                                                <small>নম্বর কপি করতে ক্লিক করুন</small>
                                            </button>
                                        )}

                                        {index === 3 && (
                                            <div className="nagad-modal-reference">
                                                💡 রেফারেন্সে "DM Course" লিখতে ভুলবেন না!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="nagad-modal-note">
                            <h3>📌 গুরুত্বপূর্ণ নোট</h3>
                            <ul>
                                <li>পেমেন্টের পর Transaction Screenshot সংরক্ষণ করুন</li>
                                <li>রেফারেন্স অবশ্যই "DM Course" লিখুন</li>
                                <li>কোনো সমস্যা হলে সরাসরি কল করুন</li>
                                <li>পেমেন্ট কনফার্মেশনের জন্য ৫-১০ মিনিট অপেক্ষা করুন</li>
                            </ul>
                        </div>
                    </article>

                    <div className="nagad-modal-right">
                        <article className="nagad-modal-total">
                            <h2>পেমেন্ট ডিটেইলস</h2>
                            <div><span>কোর্স ফি:</span><strong>৳ ৯,৯৯৯</strong></div>
                            <div><span>পরিষেবা চার্জ:</span><strong>৳ ০</strong></div>
                            <div className="nagad-modal-grand-total">
                                <span>মোট টাকা:</span><strong>৳ ৯,৯৯৯</strong>
                            </div>
                            <button onClick={copyNumber}>
                                Nagad Account Number : {NAGAD_ACCOUNT}
                            </button>
                        </article>

                        <article className="nagad-modal-confirm">
                            <h2>পেমেন্ট কনফার্মেশন</h2>
                            <a className="nagad-modal-action nagad-modal-green" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                💬 WhatsApp এ কনফার্ম করুন
                            </a>
                            <a className="nagad-modal-action nagad-modal-outline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                📸 Screenshot WhatsApp এ send করুন
                            </a>
                            <a className="nagad-modal-action nagad-modal-call" href={`tel:${SUPPORT_PHONE}`}>
                                📞 সরাসরি কথা বলুন: {SUPPORT_PHONE}
                            </a>
                            <button
                                type="button"
                                className="nagad-modal-action nagad-modal-bkash"
                                onClick={onBkashClick}
                            >
                                <img src={bkashLogo} alt="bKash" />
                                bKash এ পেমেন্ট করুন
                            </button>
                        </article>

                        <article className="nagad-modal-support">
                            <h3>🛠️ সাহায্য প্রয়োজন?</h3>
                            <p>📞 কল করুন: <a href={`tel:${SUPPORT_PHONE}`}>{SUPPORT_PHONE}</a></p>
                            <p>💬 WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{SUPPORT_PHONE}</a></p>
                            <p>🕒 সময়: সকাল ১০টা - রাত ১০টা</p>
                        </article>
                    </div>
                </div>

                <div className="nagad-modal-features">
                    <article><span>⚡</span><strong>দ্রুত কনফার্মেশন</strong><p>৫-১০ মিনিটের মধ্যে</p></article>
                    <article><span>🔒</span><strong>সুরক্ষিত পেমেন্ট</strong><p>Nagad সিকিউরিটি</p></article>
                    <article><span>🎯</span><strong>ইনস্ট্যান্ট এনরোলমেন্ট</strong><p>অবিলম্বে এক্সেস</p></article>
                </div>

                <div className="nagad-modal-emergency">
                    🚨 জরুরি সমস্যা? <a href={`tel:${SUPPORT_PHONE}`}>সরাসরি কল করুন: {SUPPORT_PHONE}</a>
                </div>
            </section>
        </div>
    );
}

export default NagadPaymentModal;
