import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ title, subtitle, badge }) {
  return (
    <header className={styles.header}>
      <div className={styles.badge}>{badge}</div>

      <div className={styles.titleRow}>
        <svg
          className={styles.logo}
          viewBox="-11.5 -10.23174 23 20.46348"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="React logo"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>

        <h1 className={styles.title}>{title}</h1>
      </div>

      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};

export default Header;
