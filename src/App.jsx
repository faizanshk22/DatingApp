import { useState } from "react";

import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import DateCard from "./components/DateCard/DateCard";
import FoodCard from "./components/FoodCard/FoodCard";
import VenueCard from "./components/VenueCard/VenueCard";
import DressCard from "./components/DressCard/DressCard";
import NameCard from "./components/NameCard/NameCard";
import MessageCard from "./components/MessageCard/MessageCard";
import SummaryCard from "./components/SummaryCard/SummaryCard";

function App() {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    name: "",
    date: null,
    time: "",
    food: [],
    venue: "",
    dressCode: "",
    message: "",
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
        <VenueCard
          setStep={setStep}
          booking={booking}
          setBooking={setBooking}
        />
      )}

      {step === 5 && (
        <DressCard
          setStep={setStep}
          booking={booking}
          setBooking={setBooking}
        />
      )}

      {step === 6 && (
        <NameCard
          setStep={setStep}
          booking={booking}
          setBooking={setBooking}
        />
      )}

      {step === 7 && (
        <MessageCard
          setStep={setStep}
          booking={booking}
          setBooking={setBooking}
        />
      )}

      {step === 8 && (
        <SummaryCard
          booking={booking}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default App;