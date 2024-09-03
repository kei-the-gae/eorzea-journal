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

export {
    index,
    create,
};
