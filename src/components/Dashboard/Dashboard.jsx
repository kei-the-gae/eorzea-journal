import { AuthedUserContext } from '../../App';
import { useContext } from 'react';

const Dashboard = ({ characters }) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <ul>
        {characters.map(character => (
          <li key={character._id}>{character.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
