import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main>
      <h1>Eorzea Journal</h1>
      <p>A Final Fantasy XIV Online character tracker.</p>
      <Link to={'/signin'}>Sign in</Link>
      <Link to={'/signup'}>Sign up</Link>
    </main>
  );
};

export default Landing;
