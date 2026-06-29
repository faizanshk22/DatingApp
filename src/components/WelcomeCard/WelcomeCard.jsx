import { motion } from "framer-motion";
import "./welcome.scss";

const WelcomeCard = ({ setStep }) => {
  return (
    <motion.div
      className="welcome-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1>🌸 Will you go on a date with me? 🌸</h1>

      <button onClick={() => setStep(2)}>
        YES ❤️
      </button>
    </motion.div>
  );
};

export default WelcomeCard;