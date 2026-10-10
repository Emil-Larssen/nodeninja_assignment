const express = require('express');
const app = express()
const port = 3000
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'textfile.txt');
const emitter = require('./eventBus');
require('./logger');


const fs = require('fs').promises;
app.get('/read-file', async (req, res) => {
    emitter.emit('get-request');
    try{
        const data = await fs.readFile(filePath, 'utf8');
        res.send(data);
    } catch (err) {
        res.status(500).send('<h1>File could not be read</h1>')
    }
});

app.use(express.json());
app.post('/write-file', async(req, res) => {
    emitter.emit('post-request');
    if(!req.body.file){
        res.status(400).send('<h1>No content provided</h1>');
        return;
    }
    try{
        const data = await fs.writeFile(filePath, req.body.content);
        res.send(data);
    } catch (err) {
        res.status(500).send('<h1>could not write to file</h1>')
    }
})

app.use((req, res) => {
    emitter.emit('unknown-request');
    res.status(404).send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
    emitter.emit('server-started',port);
});

