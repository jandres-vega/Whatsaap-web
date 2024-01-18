import {Server} from 'socket.io';
class SocketConfig {

    public io:Server|null;
    constructor(io:Server) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents(){
        this.io?.on('connection', (socket) => {
            console.log('new user on app');
            socket.on('disconnect', () => {
                console.log('user disconnect');
            });
        });
    }
}

export {SocketConfig};
