import { useState } from "react";

import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import DateCard from "./components/DateCard/DateCard";
import FoodCard from "./components/FoodCard/FoodCard";
import SummaryCard from "./components/SummaryCard/SummaryCard";

function App() {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    date: null,
    time: "",
    food: "",
  });

  return (
    <div className="app">
      {step === 1 && (
        <WelcomeCard setStep={setStep} />
      )}

      {step === 2 && (
        <DateCard
          setStep={setStep}
          booking={booking}
          setBooking={setBooking}
        />
      )}

      {step === 3 && (
        <FoodCard
          setStep={setStep}
          booking={booking}
          setBooking={setBooking}
        />
      )}

      {step === 4 && (
        <SummaryCard
          booking={booking}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default App;