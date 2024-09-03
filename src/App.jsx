import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';

import * as authService from '../src/services/authService'; // import the authservice
import * as characterService from '../src/services/characterService';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isCharacterFormOpen, setIsCharacterFormOpen] = useState(false);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const characterData = await characterService.index(user._id);
      setCharacters(characterData);
    };
    if (user) fetchAllCharacters();
  }, [user]);

  const updateSelectedCharacter = (character) => {
    setSelectedCharacter(character)
  };

  const handleCharacterFormView = () => {
    setIsCharacterFormOpen(!isCharacterFormOpen);
  };

  const handleAddCharacter = async (characterFormData) => {
    const newCharacter = await characterService.create(user._id, characterFormData);
    setCharacters([...characters, newCharacter]);
    setIsCharacterFormOpen(false);
  };

  const handleDeleteCharacter = async (characterId) => {
    const deletedCharacter = await characterService.deleteCharacter(user._id, characterId);
    setCharacters(characters.filter(character => character._id !== deletedCharacter._id));
    setSelectedCharacter(null);
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <Route
              path="/"
              element={
                <Dashboard
                  user={user}
                  characters={characters}
                  selectedCharacter={selectedCharacter}
                  updateSelectedCharacter={updateSelectedCharacter}
                  isCharacterFormOpen={isCharacterFormOpen}
                  handleCharacterFormView={handleCharacterFormView}
                  handleAddCharacter={handleAddCharacter}
                  handleDeleteCharacter={handleDeleteCharacter}
                />
              }
            />
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
