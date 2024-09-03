const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/users`;

const index = async (userId) => {
    try {
        const res = await fetch(`${BASE_URL}/${userId}/characters`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (err) {
        console.log(err);
    };
};

const create = async (userId, formData) => {
    try {
        const res = await fetch(`${BASE_URL}/${userId}/characters`, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    };
};

const deleteCharacter = async (userId, characterId) => {
    try {
        const res = await fetch(`${BASE_URL}/${userId}/characters/${characterId}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return res.json();
    } catch (err) {
        console.log(err);
    };
};

const updateCharacter = async (userId, characterId, formData) => {
    try {
        const res = await fetch(`${BASE_URL}/${userId}/characters/${characterId}`, {
            method: 'put',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    };
};

const createJob = async (userId, characterId, formData) => {
    try {
        const res = await fetch(`${BASE_URL}/${userId}/characters/${characterId}/jobs`, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    };
};

export {
    index,
    create,
    deleteCharacter,
    updateCharacter,
    createJob,
};
