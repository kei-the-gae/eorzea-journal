import { Link } from 'react-router-dom';

const CharacterList = ({ user, characters, updateSelectedCharacter }) => {
    const characterList = characters.map(character =>
        <a key={character._id} onClick={() => updateSelectedCharacter(character)}><li>{character.name}</li></a>
    );
    return (
        <>
            {!characters.length ? <p>No characters yet.</p> : <ul>{characterList}</ul>}
        </>
    );
};

export default CharacterList;