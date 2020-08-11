const axios = require('axios');

const data = {
    name: 'John Doe',
    job: 'Content Writer'
};

axios.post('https://www.example.org', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    }); 