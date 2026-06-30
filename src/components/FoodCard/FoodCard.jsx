import { motion } from "framer-motion";
import "./food.scss";

const foods = [
  // Italian
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🍝", name: "Pasta" },
  { emoji: "🧀", name: "Lasagna" },
  { emoji: "🥟", name: "Ravioli" },
  { emoji: "🥖", name: "Garlic Bread" },

  // American
  { emoji: "🍔", name: "Burger" },
  { emoji: "🌭", name: "Hot Dog" },
  { emoji: "🥩", name: "Steak" },
  { emoji: "🍗", name: "BBQ Chicken" },
  { emoji: "🍖", name: "BBQ Ribs" },

  // Mexican
  { emoji: "🌮", name: "Tacos" },
  { emoji: "🌯", name: "Burrito" },
  { emoji: "🫓", name: "Quesadilla" },
  { emoji: "🧀", name: "Nachos" },

  // Asian
  { emoji: "🍜", name: "Chicken Ramen" },
  { emoji: "🥡", name: "Fried Rice" },
  { emoji: "🥢", name: "Chicken Teriyaki" },
  { emoji: "🥠", name: "Dim Sum" },

  // Middle Eastern
  { emoji: "🥙", name: "Shawarma" },
  { emoji: "🍢", name: "Chicken Kebab" },
  { emoji: "🧆", name: "Falafel" },

  // Continental
  { emoji: "🍽️", name: "Grilled Chicken" },
  { emoji: "🍗", name: "Roast Chicken" },
  { emoji: "🥩", name: "Beef Medallions" },

  // Pakistani / Desi
  { emoji: "🍛", name: "Chicken Biryani" },
  { emoji: "🍗", name: "Chicken Karahi" },
  { emoji: "🥘", name: "Butter Chicken" },
  { emoji: "🥘", name: "Chicken Handi" },
  { emoji: "🍢", name: "Chicken Tikka" },
  { emoji: "🥩", name: "Seekh Kebab" },
  { emoji: "🫓", name: "Naan & Curry" },
  { emoji: "🥘", name: "Nihari" },
  { emoji: "🍚", name: "Chicken Pulao" },
  { emoji: "🥘", name: "White Chicken Karahi" },

  // Fast Food
  { emoji: "🍟", name: "Fries" },
  { emoji: "🍗", name: "Fried Chicken" },
  { emoji: "🥪", name: "Club Sandwich" },

  // Desserts
  { emoji: "🍰", name: "Cheesecake" },
  { emoji: "🍫", name: "Chocolate Lava Cake" },
  { emoji: "🍨", name: "Ice Cream" },
  { emoji: "🧁", name: "Cupcake" },
  { emoji: "🍮", name: "Crème Brûlée" },
  { emoji: "🍩", name: "Donuts" },

  // Drinks
  { emoji: "🍷", name: "Red Wine" },
  { emoji: "🥂", name: "Sparkling Juice" },
  { emoji: "☕", name: "Coffee" },
  { emoji: "🧋", name: "Bubble Tea" },
  { emoji: "🥤", name: "Milkshake" },
  { emoji: "🍹", name: "Mojito (Mocktail)" },
];

const FoodCard = ({ booking, setBooking, setStep }) => {
  const handleSelectFood = (food) => {
    const selectedFoods = booking.food || [];

    if (selectedFoods.includes(food)) {
      // Remove if already selected
      setBooking({
        ...booking,
        food: selectedFoods.filter((item) => item !== food),
      });
    } else {
      // Add new selection
      setBooking({
        ...booking,
        food: [...selectedFoods, food],
      });
    }
  };

  const handleContinue = () => {
    if (booking.food.length === 0) return;

    setStep(4);
  };

  return (
    <motion.div
      className="food-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>🍽️ What are we feeling?</h2>

      <p className="subtitle">
        Pick as many as you'd like ❤️
      </p>

      <div className="food-grid">
        {foods.map((food) => (
          <div
            key={food.name}
            className={`food-item ${
              booking.food.includes(food.name) ? "selected" : ""
            }`}
            onClick={() => handleSelectFood(food.name)}
          >
            <span>{food.emoji}</span>
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>

      {booking.food.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#ff4d88",
            fontWeight: "600",
          }}
        >
          <strong>Selected:</strong> {booking.food.join(", ")}
        </div>
      )}

      <button
        className="continue-btn"
        onClick={handleContinue}
        disabled={booking.food.length === 0}
      >
        Next 💕
      </button>
    </motion.div>
  );
};

export default FoodCard;