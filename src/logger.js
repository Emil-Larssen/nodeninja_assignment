const emitter = require('./eventBus');

emitter.on('server-started', (port) => {
    console.log(`Server started on port ${port}`);
});

emitter.on('get-request', () => {
    console.log('GET/read-file request received');
});

emitter.on('post-request', () => {
    console.log('POST/write-file request received');
});

emitter.on('unknown-request', () => {
    console.log('Unknown request received');
});