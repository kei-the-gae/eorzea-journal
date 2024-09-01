import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
    return (
        <ul>
            {characters.map(character => (
                <Link key={character._id}><li>{character.name}</li></Link>
            ))}
        </ul>
    );
};

export default CharacterList;