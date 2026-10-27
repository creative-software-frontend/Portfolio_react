import { useEffect } from "react";
import bkashLogo from "../assets/bkash.jpg";

const BkashPaymentModal = ({ onClose, onNagadClick }) => {
    const paymentNumber = "01898879001";
    const fee = "9,999";
    const supportNumber = "01978866933";

    const whatsappUrl = `https://wa.me/88${supportNumber}?text=${encodeURIComponent(
        "Hello, I need help with the training course payment."
    )}`;

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    const copyNumber = async () => {
        try {
            await navigator.clipboard.writeText(paymentNumber);
            alert("bKash number copied!");
        } catch {
            alert(`bKash number: ${paymentNumber}`);
        }
    };

    return (
        <div className="payment-overlay" onClick={onClose}>
            <div
                className="payment-modal"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="payment-title"
            >
                <button
                    className="payment-close"
                    onClick={onClose}
                    aria-label="Close payment modal"
                >
                    ×
                </button>

                <button className="payment-home" onClick={onClose}>
                    ← Back to Training
                </button>

                <header className="payment-header">
                    <h2 id="payment-title">bKash Payment</h2>
                    <p>সহজ ৪ স্টেপে পেমেন্ট সম্পন্ন করুন</p>
                </header>

                <div className="payment-layout">
                    <section className="payment-card payment-instructions">
                        <div className="payment-brand">
                            <img className="payment-brand-logo" src={bkashLogo} alt="bKash" />
                            <div>
                                <h3>bKash পেমেন্ট</h3>
                                <p>কোর্স ফি: ৳ {fee}</p>
                            </div>
                        </div>

                        <div className="payment-step">
                            <span>1</span>
                            <div>
                                <h4>bKash App ওপেন করুন</h4>
                                <p>আপনার bKash মোবাইল অ্যাপ্লিকেশন ওপেন করুন</p>
                            </div>
                        </div>

                        <div className="payment-step">
                            <span>2</span>
                            <div>
                                <h4>Payment নির্বাচন করুন</h4>
                                <p>"Payment" অপশনে ক্লিক করুন</p>
                            </div>
                        </div>

                        <div className="payment-step">
                            <span>3</span>
                            <div>
                                <h4>নম্বর ও টাকা দিন</h4>
                                <div className="payment-number-box">
                                    <strong>{paymentNumber}</strong>
                                    <p>টাকা: ৳ {fee}</p>
                                    <button onClick={copyNumber}>Copy Number</button>
                                </div>
                            </div>
                        </div>

                        <div className="payment-step">
                            <span>4</span>
                            <div>
                                <h4>রেফারেন্স দিন</h4>
                                <p>রেফারেন্সে আপনার নাম লিখুন</p>
                            </div>
                        </div>

                        <div className="payment-note">
                            <strong>📌 গুরুত্বপূর্ণ নোট</strong>
                            <p>• পেমেন্টের পর Screenshot সংরক্ষণ করুন</p>
                            <p>• রেফারেন্সে অবশ্যই আপনার নাম লিখুন</p>
                            <p>• কোনো সমস্যা হলে WhatsApp-এ মেসেজ দিন</p>
                        </div>
                    </section>

                    <div className="payment-right">
                        <section className="payment-price-card">
                            <h3>পেমেন্ট ডিটেইলস</h3>
                            <div className="payment-price-row">
                                <span>কোর্স ফি:</span>
                                <strong>৳ {fee}</strong>
                            </div>
                            <div className="payment-price-row">
                                <span>পরিষেবা চার্জ:</span>
                                <strong>৳ ০</strong>
                            </div>
                            <div className="payment-total">
                                <span>মোট টাকা:</span>
                                <strong>৳ {fee}</strong>
                            </div>
                            <button className="payment-account" onClick={copyNumber}>
                                bKash Account: {paymentNumber}
                            </button>
                        </section>

                        <section className="payment-card payment-confirm">
                            <h3>পেমেন্ট কনফার্মেশন</h3>
                            <a
                                className="payment-whatsapp"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📱 WhatsApp এ কনফার্ম করুন
                            </a>
                            <a
                                className="payment-screenshot"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📸 Screenshot WhatsApp এ send করুন
                            </a>
                            <button
                                type="button"
                                className="payment-nagad"
                                onClick={onNagadClick}
                            >
                                Nagad এ পেমেন্ট করুন
                            </button>
                        </section>

                        <section className="payment-support">
                            <strong>🛠️ সহায়তা প্রয়োজন?</strong>
                            <p>
                                📞 কল করুন:{" "}
                                <a href={`tel:${supportNumber}`}>{supportNumber}</a>
                            </p>
                            <p>
                                💬 WhatsApp:{" "}
                                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                                    {supportNumber}
                                </a>
                            </p>
                            <p>🕒 সময়: সকাল ১০টা - রাত ১০টা</p>
                        </section>
                    </div>
                </div>

                <section className="payment-benefits">
                    <div>
                        <span>⚡</span>
                        <strong>দ্রুত কনফার্মেশন</strong>
                        <p>৫ মিনিটের মধ্যে</p>
                    </div>
                    <div>
                        <span>🔒</span>
                        <strong>সুরক্ষিত পেমেন্ট</strong>
                        <p>১০০% সেফ</p>
                    </div>
                    <div>
                        <span>🎯</span>
                        <strong>ইনস্ট্যান্ট এনরোলমেন্ট</strong>
                        <p>অভিজ্ঞদের এক্সেস</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BkashPaymentModal;