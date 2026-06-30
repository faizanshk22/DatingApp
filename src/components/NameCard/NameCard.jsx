import { motion } from "framer-motion";
import "./name.scss";

const NameCard = ({ booking, setBooking, setStep }) => {
  const handleContinue = () => {
    if (!booking.name.trim()) return;

    setStep(5);
  };

  return (
    <motion.div
      className="name-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>💕 Before we make it official...</h1>

      <p>What should I call you?</p>

      <input
        type="text"
        placeholder="Your beautiful name..."
        value={booking.name}
        onChange={(e) =>
          setBooking({
            ...booking,
            name: e.target.value,
          })
        }
      />

      <button onClick={handleContinue}>
        Continue ❤️
      </button>
    </motion.div>
  );
};

export default NameCard;