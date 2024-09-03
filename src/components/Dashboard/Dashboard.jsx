import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import CharacterList from '../CharacterList/CharacterList';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import CharacterForm from '../CharacterForm/CharacterForm';

const Dashboard = ({ characters, selectedCharacter, updateSelectedCharacter }) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Characters</h1>
      <CharacterList
        characters={characters}
        updateSelectedCharacter={updateSelectedCharacter}
      />
      <CharacterDetails
        selectedCharacter={selectedCharacter}
      />
      <CharacterForm

      />
    </main>
  );
};

export default Dashboard;
