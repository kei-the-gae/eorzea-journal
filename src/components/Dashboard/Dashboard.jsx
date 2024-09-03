import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import CharacterList from '../CharacterList/CharacterList';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import CharacterForm from '../CharacterForm/CharacterForm';

const Dashboard = ({ characters, selectedCharacter, updateSelectedCharacter, isCharacterFormOpen, handleCharacterFormView }) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <h1>Characters</h1>
      <CharacterList
        characters={characters}
        updateSelectedCharacter={updateSelectedCharacter}
        isCharacterFormOpen={isCharacterFormOpen}
        handleCharacterFormView={handleCharacterFormView}
      />
      {isCharacterFormOpen ?
        (<CharacterForm

        />) :
        (<CharacterDetails
          selectedCharacter={selectedCharacter}
        />)}
    </main>
  );
};

export default Dashboard;
