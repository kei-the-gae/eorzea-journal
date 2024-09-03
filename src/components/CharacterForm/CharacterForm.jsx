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

    const handleWorldSelect = e => {
        const aether = ['Adamantoise', 'Cactuar', 'Faerie', 'Gilgamesh', 'Jenova', 'Midgardsormr', 'Sargatanas', 'Siren'];
        const crystal = ['Balmung', 'Brynhildr', 'Coeurl', 'Diabolos', 'Goblin', 'Malboro', 'Mateus', 'Zalera'];
        const dynamis = ['Cuchulainn', 'Golem', 'Halicarnassus', 'Kraken', 'Maduin', 'Marilith', 'Rafflesia', 'Seraph'];
        const primal = ['Behemoth', 'Excalibur', 'Exodus', 'Famfrit', 'Hyperion', 'Lamia', 'Leviathan', 'Ultros']
        const chaos = ['Cerberus', 'Louisoix', 'Moogle', 'Omega', 'Phantom', 'Ragnarok', 'Sagittarius', 'Spriggan'];
        const light = ['Alpha', 'Lich', 'Odin', 'Phoenix', 'Raiden', 'Shiva', 'Twintania', 'Zodiark'];
        const materia = ['Bismarck', 'Ravana', 'Sephirot', 'Sophia', 'Zurvan'];
        const elemental = ['Aegis', 'Atomos', 'Carbuncle', 'Garuda', 'Gungnir', 'Kujata', 'Tonberry', 'Typhon'];
        const gaia = ['Alexander', 'Bahamut', 'Durandal', 'Fenrir', 'Ifrit', 'Ridill', 'Tiamat', 'Ultima'];
        const mana = ['Anima', 'Asura', 'Chocobo', 'Hades', 'Ixion', 'Masamune', 'Pandaemonium', 'Titan'];
        const meteor = ['Belias', 'Mandragora', 'Ramuh', 'Shinryu', 'Unicorn', 'Valefor', 'Yojimbo', 'Zeromus'];
        if (aether.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Aether', world: e.value });
        if (crystal.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Crystal', world: e.value });
        if (dynamis.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Dynamis', world: e.value });
        if (primal.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Primal', world: e.value });
        if (chaos.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Chaos', world: e.value });
        if (light.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Light', world: e.value });
        if (materia.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Materia', world: e.value });
        if (elemental.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Elemental', world: e.value });
        if (gaia.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Gaia', world: e.value });
        if (mana.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Mana', world: e.value });
        if (meteor.some(world => world === e.value)) setFormData({ ...formData, datacenter: 'Meteor', world: e.value });
    };

    const handleChange = e => {
        if (!e.target) {
            handleWorldSelect(e);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
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
                <label htmlFor='isStoryComplete-input'>Is MSQ Complete?</label>
                <input
                    type='radio'
                    name='isStoryComplete'
                    id='isStoryComplete-input'
                    value='true'
                    checked={formData.isStoryComplete === true}
                    onChange={handleChange}
                />
                <label htmlFor='true'>Completed</label>
                <input
                    type='radio'
                    name='isStoryComplete'
                    id='isStoryComplete-input'
                    value='false'
                    checked={formData.isStoryComplete === false}
                    onChange={handleChange}
                />
                <label htmlFor='false'>Incomplete</label>
                <button type='submit'>Create New Character</button>
            </form>
        </section>
    );
};

export default CharacterForm;