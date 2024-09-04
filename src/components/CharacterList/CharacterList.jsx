import styles from '../Dashboard/Dashboard.module.css';

const CharacterList = ({ characters, updateSelectedCharacter, isCharacterFormOpen, handleCharacterFormView }) => {
    const characterList = characters.map(character =>
        <a className={styles.listitems} key={character._id} onClick={() => updateSelectedCharacter(character)}><li>{character.name} on {character.world}</li></a>
    );
    return (
        <section>
            <button onClick={() => handleCharacterFormView(null)}>
                {isCharacterFormOpen ? 'Close Form' : 'New Character'}
            </button>
            {!characters.length ? <p>No characters yet.</p> : <ul>{characterList}</ul>}
        </section>
    );
};

export default CharacterList;