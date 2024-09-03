import { useState } from 'react';
import Select from 'react-select';
import worldOptions from './WorldOptions';

const initialState = {
    name: '',
    datacenter: '',
    world: '',
    isStoryComplete: false,
};

const CharacterForm = () => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const eventName = e.target ? e.target.name : 'world';
        const eventValue = e.target ? e.target.value : e.value;
        setFormData({ ...formData, [eventName]: eventValue });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('formData', formData);
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name-input'>Character name</label>
                <input
                    required
                    type='text'
                    name='name'
                    id='name-input'
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor='world-dropdown'>Home world</label>
                <Select
                    name='world'
                    id='world-dropdown'
                    options={worldOptions}
                    isDisabled={worldOptions.isDisabled}
                    onChange={handleChange}
                >
                </Select>
                <button type="submit">Create New Character</button>
            </form>
        </section>
    );
};

export default CharacterForm;