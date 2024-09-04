import { useState } from 'react';

const initialState = {
    name: 'Paladin',
    level: 1,
};

const JobOptions = [
    'Paladin',
    'Warrior',
    'Dark Knight',
    'Gunbreaker',
    'White Mage',
    'Scholar',
    'Astrologian',
    'Sage',
    'Monk',
    'Dragoon',
    'Ninja',
    'Samurai',
    'Reaper',
    'Viper',
    'Bard',
    'Machinist',
    'Dancer',
    'Summoner',
    'Red Mage',
    'Black Mage',
    'Pictomancer',
    'Blue Mage',
    'Carpenter',
    'Blacksmith',
    'Armorer',
    'Goldsmith',
    'Leatherworker',
    'Weaver',
    'Alchemist',
    'Culinarian',
    'Miner',
    'Botanist',
    'Fisher',
];

const JobForm = ({ selectedCharacter, selectedJob, handleAddJob, handleUpdateJob }) => {
    const [formData, setFormData] = useState(selectedJob ? selectedJob : initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedJob) {
            handleUpdateJob(selectedCharacter._id, selectedJob._id, formData);
        } else {
            handleAddJob(selectedCharacter._id, formData);
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name-input:'>Job: </label>
            <select
                type='text'
                name='name'
                id='name-input'
                value={formData.name}
                onChange={handleChange}
            >
                <option value='select' disabled>Select job</option>
                {JobOptions.map((option, i) => <option key={i} value={option}>{option}</option>)}
            </select>
            <label htmlFor='level-input'>Level: </label>
            <input
                type='number'
                name='level'
                id='level-input'
                value={formData.level}
                min='1'
                max='100'
                onChange={handleChange}
            />
            <button type="submit">{selectedJob ? 'Update Job' : 'Add New Job'}</button>
        </form >
    );
};

export default JobForm;