import {Server} from 'http';
import {Server as SocketServer} from 'socket.io';

let socket:SocketServer | null = null;

const initSocketServer = (server:Server) => {
    socket = new SocketServer(server, {
        cors: {
            origin: '*'
        }
    });
};

export {socket, initSocketServer};

