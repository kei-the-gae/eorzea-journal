const CharacterList = ({ user, characters, updateSelectedCharacter }) => {
    const characterList = characters.map(character =>
        <a key={character._id} onClick={() => updateSelectedCharacter(character)}><li>{character.name}</li></a>
    );
    return (
        <section>
            {!characters.length ? <p>No characters yet.</p> : <ul>{characterList}</ul>}
        </section>
    );
};

export default CharacterList;