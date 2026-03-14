import PropTypes from "prop-types";
import FlashCard from "./FlashCard";
import useFlashCard from "../hooks/useFlashCard";
import styles from "./FlashCardGrid.module.css";

function FlashCardGrid({ cards }) {
  const { openIndex, toggleCard } = useFlashCard();

  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <FlashCard
          key={card.question}
          card={card}
          index={index}
          isOpen={openIndex === index}
          onClick={() => toggleCard(index)}
        />
      ))}
    </div>
  );
}

FlashCardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FlashCardGrid;
