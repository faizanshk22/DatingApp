import { motion } from "framer-motion";
import "./venue.scss";

const venues = [
  // Romantic Cafés
  { emoji: "☕", name: "EL&N London" },
  { emoji: "🧁", name: "Peggy Porschen" },
  { emoji: "☕", name: "WatchHouse" },
  { emoji: "🥐", name: "Grind Coffee" },
  { emoji: "🍰", name: "Kiss the Hippo" },

  // Restaurants
  { emoji: "🍽️", name: "The Ivy" },
  { emoji: "🍷", name: "Clos Maggiore" },
  { emoji: "🍝", name: "Circolo Popolare" },
  { emoji: "🥂", name: "Coppa Club Tower Bridge" },
  { emoji: "🥩", name: "Flat Iron" },

  // Parks
  { emoji: "🌳", name: "Hyde Park" },
  { emoji: "🌸", name: "St James's Park" },
  { emoji: "🌿", name: "Regent's Park" },
  { emoji: "🌹", name: "Kensington Gardens" },
  { emoji: "🦌", name: "Richmond Park" },

  // Views
  { emoji: "🌉", name: "Tower Bridge" },
  { emoji: "🎡", name: "London Eye" },
  { emoji: "🌇", name: "Sky Garden" },
  { emoji: "🏙️", name: "The Shard" },
  { emoji: "🚤", name: "Thames Riverside Walk" },

  // Fun
  { emoji: "🎬", name: "Cinema Night" },
  { emoji: "🎳", name: "Bowling" },
  { emoji: "🛍️", name: "Covent Garden" },
  { emoji: "🎨", name: "National Gallery" },
  { emoji: "🌃", name: "Soho Night Walk" },
];

const VenueCard = ({ booking, setBooking, setStep }) => {
  const handleVenue = (venue) => {
    setBooking({
      ...booking,
      venue,
    });
  };

  const handleContinue = () => {
    if (!booking.venue) return;

    setStep(5); // Dress Card
  };

  return (
    <motion.div
      className="venue-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>📍 Where should we go?</h2>

      <p className="subtitle">
        Pick the perfect place for our date ❤️
      </p>

      <div className="venue-grid">
        {venues.map((venue) => (
          <div
            key={venue.name}
            className={`venue-item ${
              booking.venue === venue.name ? "selected" : ""
            }`}
            onClick={() => handleVenue(venue.name)}
          >
            <span>{venue.emoji}</span>
            <h3>{venue.name}</h3>
          </div>
        ))}
      </div>

      {booking.venue && (
        <div className="selected-venue">
          ❤️ Selected: <strong>{booking.venue}</strong>
        </div>
      )}

      <button
        className="continue-btn"
        onClick={handleContinue}
        disabled={!booking.venue}
      >
        Next ❤️
      </button>
    </motion.div>
  );
};

export default VenueCard;