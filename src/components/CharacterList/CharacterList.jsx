import { Link } from 'react-router-dom';

const CharacterList = ({ user, characters, updateSelectedCharacter }) => {
    return (
        <ul>
            {characters.map(character => (
                <a key={character._id} onClick={() => updateSelectedCharacter(character)}><li>{character.name}</li></a>
            ))}
        </ul>
    );
};

export default CharacterList;