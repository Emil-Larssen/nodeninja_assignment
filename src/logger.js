const emitter = require('./eventBus');

emitter.on('server-started', (port) => {
    const startTime = new Date().toISOString();
    console.log(`${startTime} Server started on port ${port}`);
});

emitter.on('request-finished', (method, path, statusCode, responseTime) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} ${method} ${path} ${statusCode} ${responseTime}ms`);
});

