import { motion } from "framer-motion";
import "./dress.scss";

const dressCodes = [
  {
    emoji: "👕",
    name: "Casual",
    description: "Comfortable and relaxed",
  },
  {
    emoji: "🧥",
    name: "Smart Casual",
    description: "Stylish but comfortable",
  },
  {
    emoji: "🤵",
    name: "Formal",
    description: "Suits & elegant dresses",
  },
  {
    emoji: "👗",
    name: "Elegant",
    description: "Dress to impress ❤️",
  },
  {
    emoji: "🥻",
    name: "Traditional",
    description: "Cultural & graceful",
  },
];

const DressCard = ({ booking, setBooking, setStep }) => {
  const handleDress = (dress) => {
    setBooking({
      ...booking,
      dressCode: dress,
    });
  };

  const handleContinue = () => {
    if (!booking.dressCode) return;

    setStep(6); // Name Card
  };

  return (
    <motion.div
      className="dress-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>👔 What should we wear?</h2>

      <p className="subtitle">
        Pick the vibe for our date ✨
      </p>

      <div className="dress-grid">
        {dressCodes.map((dress) => (
          <div
            key={dress.name}
            className={`dress-item ${
              booking.dressCode === dress.name ? "selected" : ""
            }`}
            onClick={() => handleDress(dress.name)}
          >
            <span>{dress.emoji}</span>

            <h3>{dress.name}</h3>

            <p>{dress.description}</p>
          </div>
        ))}
      </div>

      {booking.dressCode && (
        <div className="selected-dress">
          ❤️ Dress Code: <strong>{booking.dressCode}</strong>
        </div>
      )}

      <button
        className="continue-btn"
        onClick={handleContinue}
        disabled={!booking.dressCode}
      >
        Next ❤️
      </button>
    </motion.div>
  );
};

export default DressCard;