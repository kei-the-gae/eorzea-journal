import './App.css';

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
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

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

  const handleCharacterFormView = (character) => {
    if (!character) setSelectedCharacter(null);
    setIsCharacterFormOpen(!isCharacterFormOpen);
  };

  const updateSelectedJob = (job) => {
    setSelectedJob(job);
  };

  const handleJobFormView = (job) => {
    if (!job) setSelectedJob(null);
    updateSelectedJob(job);
    setIsJobFormOpen(!isJobFormOpen);
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

  const handleUpdateCharacter = async (characterId, characterFormData) => {
    const updatedCharacter = await characterService.updateCharacter(user._id, characterId, characterFormData);
    setCharacters(characters.map(character => (characterId === character._id ? updatedCharacter : character)));
    setIsCharacterFormOpen(false);
    setSelectedCharacter(updatedCharacter);
  };

  const handleAddJob = async (characterId, jobFormData) => {
    const newJob = await characterService.createJob(user._id, characterId, jobFormData);
    const updatedCharacter = { ...selectedCharacter, jobs: [...selectedCharacter.jobs, newJob] }
    setSelectedCharacter(updatedCharacter);
    setCharacters(characters.map(character => (updatedCharacter._id === character._id ? updatedCharacter : character)));
    setIsJobFormOpen(false);
  };

  const handleUpdateJob = async (characterId, jobId, jobFormData) => {
    const updatedCharacter = await characterService.updateJob(user._id, characterId, jobId, jobFormData);
    setSelectedCharacter(updatedCharacter);
    setCharacters(characters.map(character => (updatedCharacter._id === character._id ? updatedCharacter : character)));
    setIsJobFormOpen(false);
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
                  selectedJob={selectedJob}
                  updateSelectedCharacter={updateSelectedCharacter}
                  isCharacterFormOpen={isCharacterFormOpen}
                  handleCharacterFormView={handleCharacterFormView}
                  handleAddCharacter={handleAddCharacter}
                  handleDeleteCharacter={handleDeleteCharacter}
                  handleUpdateCharacter={handleUpdateCharacter}
                  isJobFormOpen={isJobFormOpen}
                  handleJobFormView={handleJobFormView}
                  handleAddJob={handleAddJob}
                  handleUpdateJob={handleUpdateJob}
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
