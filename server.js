var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const{crashnum} = require('./API/basemanager')


server.listen(3001, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {

    socket.on('number', function (data) {

        crashnum(data)

    });

});
