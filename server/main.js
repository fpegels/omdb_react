/* eslint-disable global-require */

var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); 
};

var startServer = function () {

    var PORT = process.env.PORT || 4200;

    server.listen(PORT, function () {
        console.log('Server started on port', PORT);
    });

};
createApplication()
startServer()
