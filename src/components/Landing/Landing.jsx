import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <main className={styles.flexcontainer}>
      <div className={styles.container}>
        <h1>Eorzea Journal</h1>
        <p className={styles.landingp}>A Final Fantasy XIV Online character tracker.</p>
        <div className={styles.buttoncontainer}>
          <Link to={'/signin'}>Sign in</Link>
          <Link to={'/signup'}>Sign up</Link>
        </div>
      </div>
    </main>
  );
};

export default Landing;
