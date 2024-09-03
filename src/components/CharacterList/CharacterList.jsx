const CharacterList = ({ characters, updateSelectedCharacter, isCharacterFormOpen, handleCharacterFormView }) => {
    const characterList = characters.map(character =>
        <a key={character._id} onClick={() => updateSelectedCharacter(character)}><li>{character.name}</li></a>
    );
    return (
        <section>
            <button onClick={handleCharacterFormView}>
                {isCharacterFormOpen ? 'Close Form' : 'New Character'}
            </button>
            {!characters.length ? <p>No characters yet.</p> : <ul>{characterList}</ul>}
        </section>
    );
};

export default CharacterList;