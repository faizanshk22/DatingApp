import { motion } from "framer-motion";
import "./message.scss";

const MessageCard = ({ booking, setBooking, setStep }) => {
  const handleContinue = () => {
    // Message is optional
    setStep(8);
  };

  return (
    <motion.div
      className="message-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>💌 One Last Thing...</h1>

      <p className="subtitle">
        Leave me a little message ❤️
        <br />
        <span>(Optional)</span>
      </p>

      <textarea
        rows="8"
        placeholder="Can't wait to see you ❤️"
        value={booking.message}
        onChange={(e) =>
          setBooking({
            ...booking,
            message: e.target.value,
          })
        }
      />

      <button
        className="continue-btn"
        onClick={handleContinue}
      >
        Review Our Date ❤️
      </button>
    </motion.div>
  );
};

export default MessageCard;