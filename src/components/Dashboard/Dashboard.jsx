import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import CharacterList from '../CharacterList/CharacterList';

const Dashboard = ({ characters, updateSelectedCharacter }) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Eorzea Journal</h1>
      <h2>Characters</h2>
      <CharacterList
        characters={characters}
        updateSelectedCharacter={updateSelectedCharacter}
      />
    </main>
  );
};

export default Dashboard;
