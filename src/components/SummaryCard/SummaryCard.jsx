import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./summary.scss";

const SummaryCard = ({ booking }) => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: booking.name,
          date: booking.date?.toDateString(),
          time: booking.time,
          food: booking.food.join(", "),
          venue: booking.venue,
          dressCode: booking.dressCode,
          message: booking.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        console.error(err);
        alert("Couldn't send the booking.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <AnimatePresence mode="wait">
      {!success ? (
        <motion.div
          key="summary"
          className="summary-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <h1>💕 It's a Date! 💕</h1>

          <p className="subtitle">
            Here's our perfect little date plan...
          </p>

          <div className="summary-item">
            <span>💕 Name</span>
            <strong>{booking.name}</strong>
          </div>

          <div className="summary-item">
            <span>📅 Date</span>
            <strong>{booking.date?.toDateString()}</strong>
          </div>

          <div className="summary-item">
            <span>🕒 Time</span>
            <strong>{booking.time}</strong>
          </div>

          <div className="summary-item">
            <span>🍽️ Food</span>
            <strong>{booking.food.join(", ")}</strong>
          </div>

          <div className="summary-item">
            <span>📍 Venue</span>
            <strong>{booking.venue}</strong>
          </div>

          <div className="summary-item">
            <span>👔 Dress Code</span>
            <strong>{booking.dressCode}</strong>
          </div>

          <div className="summary-item">
            <span>💌 Message</span>
            <strong>
              {booking.message
                ? booking.message
                : "No message left ❤️"}
            </strong>
          </div>

          <button onClick={sendEmail} disabled={sending}>
            {sending ? "Sending..." : "Confirm Booking ❤️"}
          </button>
        </motion.div>
      ) : (
        <motion.div
          key="success"
          className="summary-card success-card"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 150,
            }}
          >
            💕 YAY!! 💕
          </motion.h1>

          <div className="summary-item">
            <span>💕</span>
            <strong>{booking.name}</strong>
          </div>

          <div className="summary-item">
            <span>📅</span>
            <strong>{booking.date?.toDateString()}</strong>
          </div>

          <div className="summary-item">
            <span>🕒</span>
            <strong>{booking.time}</strong>
          </div>

          <div className="summary-item">
            <span>🍽️</span>
            <strong>{booking.food.join(", ")}</strong>
          </div>

          <div className="summary-item">
            <span>📍</span>
            <strong>{booking.venue}</strong>
          </div>

          <div className="summary-item">
            <span>👔</span>
            <strong>{booking.dressCode}</strong>
          </div>

          <div className="summary-item">
            <span>💌</span>
            <strong>
              {booking.message
                ? booking.message
                : "No message left ❤️"}
            </strong>
          </div>

          <h2 className="success-text">
            I can't wait to see you! ❤️✨
          </h2>

          <p className="footer-note">
            (Normal guys send texts,
            <br />
            I made a whole website for you 😌❤️)
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SummaryCard;