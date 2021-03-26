import io from 'socket.io-client';

const socket = io.connect('ws://127.0.0.1:5200', {
    path: '/',
    transports: ['websocket']//, 'polling'
  });

function subscribe(cb) {
  socket.on('count', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: 'data' });
        socket.emit('subscribe', 1000);

  });
}

export { subscribe };