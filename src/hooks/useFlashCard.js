import { useState } from "react";

function useFlashCard() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleCard(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return { openIndex, toggleCard };
}

export default useFlashCard;
