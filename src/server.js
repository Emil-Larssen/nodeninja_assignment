const express = require('express');
const app = express();
const port = 3000
const emitter = require('./eventBus');
const storageService = require('./services/fileService');
require('./logger');

app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const responseTime = Date.now() - start;
        emitter.emit('request-finished',
            req.method,
            req.path,
            res.statusCode,
            responseTime
        );
    });
    next();
});

app.get('/read', async (req, res) => {
    emitter.emit('get-request');
    try{
        const data = await storageService.read();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send('<h1>File could not be read</h1>')
    }
});

app.post('/write', async(req, res) => {
    emitter.emit('post-request');
    if(typeof req.body.content !== 'string'){
        res.status(400).send('<h1>content must be a string</h1>');
        return;
    }
    try{
        await storageService.write(req.body.content);
        res.status(200).send('<h1>content successfully written to file</h1>');
    } catch (err) {
        res.status(500).send('<h1>could not write to file</h1>')
    }
})

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
})

app.listen(port, () => {
    emitter.emit('server-started',port);
});


