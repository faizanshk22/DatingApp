import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.scss";

const times = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

const DateCard = ({ setStep, booking, setBooking }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const handleNext = () => {
    if (!selectedTime) return;

    setBooking({
      ...booking,
      date: selectedDate,
      time: selectedTime,
    });

    setStep(3);
  };

  return (
    <motion.div
      className="date-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>📅 Choose Our Date</h2>
      <h5><strong>Note: Please choose date of 2027 only</strong></h5>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        minDate={new Date()}
      />

      <h3>Select Time</h3>

      <div className="times">
        {times.map((time) => (
          <button
            key={time}
            className={selectedTime === time ? "active" : ""}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <button
        className="next-btn"
        disabled={!selectedTime}
        onClick={handleNext}
      >
        Set Date ❤️
      </button>
    </motion.div>
  );
};

export default DateCard;