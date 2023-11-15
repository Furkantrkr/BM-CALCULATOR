import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <h1>BMI CALCULATOR</h1>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
