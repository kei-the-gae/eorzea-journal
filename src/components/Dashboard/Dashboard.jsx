import styles from './Dashboard.module.css';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import CharacterList from '../CharacterList/CharacterList';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import CharacterForm from '../CharacterForm/CharacterForm';

const Dashboard = ({ characters, selectedCharacter, selectedJob, updateSelectedCharacter, isCharacterFormOpen, isJobFormOpen, handleCharacterFormView, handleAddCharacter, handleDeleteCharacter, handleUpdateCharacter, handleJobFormView, handleAddJob, handleUpdateJob }) => {
  const user = useContext(AuthedUserContext);
  return (
    <main className={styles.flexcontainer}>
      <div className={styles.characterlistcontainer}>
        <h1>Characters</h1>
        <CharacterList
          characters={characters}
          updateSelectedCharacter={updateSelectedCharacter}
          isCharacterFormOpen={isCharacterFormOpen}
          handleCharacterFormView={handleCharacterFormView}
        />
      </div>
      <div className={styles.maincontainer}>
        {isCharacterFormOpen ?
          (<CharacterForm
            selectedCharacter={selectedCharacter}
            handleAddCharacter={handleAddCharacter}
            handleUpdateCharacter={handleUpdateCharacter}
          />) :
          (<CharacterDetails
            selectedCharacter={selectedCharacter}
            selectedJob={selectedJob}
            characters={characters}
            handleCharacterFormView={handleCharacterFormView}
            handleDeleteCharacter={handleDeleteCharacter}
            isJobFormOpen={isJobFormOpen}
            handleJobFormView={handleJobFormView}
            handleAddJob={handleAddJob}
            handleUpdateJob={handleUpdateJob}
          />)}
      </div>
    </main>
  );
};

export default Dashboard;
