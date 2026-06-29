import { motion } from "framer-motion";
import "./food.scss";

const foods = [
  {
    emoji: "🍕",
    name: "Pizza",
  },
  {
    emoji: "🍔",
    name: "Burger",
  },
  {
    emoji: "🍝",
    name: "Pasta",
  },
  {
    emoji: "🍣",
    name: "Sushi",
  },
  {
    emoji: "🌮",
    name: "Tacos",
  },
  {
    emoji: "🍜",
    name: "Ramen",
  },
];

const FoodCard = ({ booking, setBooking, setStep }) => {
  const handleSelectFood = (food) => {
    setBooking({
      ...booking,
      food,
    });
  };

  const handleContinue = () => {
    if (!booking.food) return;

    setStep(4);
  };

  return (
    <motion.div
      className="food-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>🍽️ Choose Our Meal</h2>

      <p className="subtitle">
        Pick something you'd love to eat together.
      </p>

      <div className="food-grid">
        {foods.map((food) => (
          <div
            key={food.name}
            className={`food-item ${
              booking.food === food.name ? "selected" : ""
            }`}
            onClick={() => handleSelectFood(food.name)}
          >
            <span>{food.emoji}</span>
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>

      <button
        className="continue-btn"
        disabled={!booking.food}
        onClick={handleContinue}
      >
        Continue ❤️
      </button>
    </motion.div>
  );
};

export default FoodCard;