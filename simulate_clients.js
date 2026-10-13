const axios = require('axios');
let GETsuccess = 0;
let GETfailed = 0;

const sendRequest = async (i) => {
    try {
        const res = await axios.get('http://localhost:3000/read');
        GETsuccess++;
    } catch (err) {
        GETfailed++;
    }
};

const runTestGET = async () => {
    const start = Date.now();
    const requests = [];

    for (let i = 1; i <= 1000; i++) {
        requests.push(sendRequest(i));
    }


    await Promise.all(requests);
    const duration = Date.now() - start;
    console.log(`GET Test completed with ${GETsuccess} successes and ${GETfailed} failures. Duration: ${duration}ms`);
}

const runTestPOST = async () => {
    const start = Date.now();
    const requests = [];
    for (let i = 1; i <= 1000; i++) {
        await axios.post('http://localhost:3000/write', { content: 'banan' });
        await axios.post('http://localhost:3000/write', { content: 'æble' });
        await axios.post('http://localhost:3000/write', { content: 'pære' });
        await axios.post('http://localhost:3000/write', { content: 'mango' });
        await axios.post('http://localhost:3000/write', { content: 'frugtsalat' });
    }
    await Promise.all(requests);
    const duration = Date.now() - start;
    //Det forventes at frugtsalat er den sidste linje i filen
    const data = await axios.get('http://localhost:3000/read');
    console.log('\nPost test completed for 5000 requests across 5 different contents.');
    console.log('expected content matches actual content ' + (data.data === 'frugtsalat') + ' Duration: ' + duration + 'ms');
}

runTestGET();
runTestPOST();



