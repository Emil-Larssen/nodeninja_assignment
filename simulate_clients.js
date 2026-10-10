const axios = require('axios');

const sendRequest = async (i) => {
    try {
        const res = await axios.get('http://localhost:3000/read-file');
        console.log(`Client ${i}:`, res.data);
    } catch (err) {
        console.error(`Client ${i} fejl:`, err.message);
    }
};

for (let i = 1; i <= 1000; i++) sendRequest(i);