import PropTypes from "prop-types";
import { DIFFICULTY_CLASS } from "../constants/difficulty";
import styles from "./FlashCard.module.css";

function FlashCard({ card, index, isOpen, onClick }) {
  const badgeClass = DIFFICULTY_CLASS[card.difficulty] ?? "Easy";

  return (
    <div
      className={`${styles.card} ${isOpen ? styles[`cardOpen${card.difficulty}`] : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen} // info to screen readers: card open/close
      aria-label={`Flash card ${index + 1}: ${card.question}`}
    >
      {isOpen ? (
        // Answer Side
        <div className={styles.answerSide}>
          <div className={styles.answerHeader}>
            <span className={styles.label}>Answer :</span>
            <span className={`${styles.badge} ${styles[`badge${badgeClass}`]}`}>
              {card.difficulty}
            </span>
          </div>
          <h3 className={styles.answerTitle}>{card.question}</h3>
          <p className={styles.answerText}>{card.answer}</p>
        </div>
      ) : (
        // Question Side
        <div className={styles.questionSide}>
          <span className={styles.label}>Question {index + 1}</span>
          <h3 className={styles.questionText}>{card.question}</h3>
          <span className={`${styles.badge} ${styles[`badge${badgeClass}`]}`}>
            {card.difficulty}
          </span>
        </div>
      )}
    </div>
  );
}

FlashCard.propTypes = {
  card: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FlashCard;
