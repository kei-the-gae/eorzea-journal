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

export {
    index,
};
