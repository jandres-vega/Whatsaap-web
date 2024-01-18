import express, {Express} from 'express';
import {Server as ServerHttp, createServer} from 'http';
import cors from 'cors';
import morgan from 'morgan';
import {initSocketServer, socket, SocketConfig} from './utils';
import {configEnv} from './config';

class Server {
    public app: Express;
    public port: string | undefined;
    public server: ServerHttp;

    constructor() {
        this.app = express();
        this.port = configEnv.port_server;

        this.server = createServer(this.app);
        initSocketServer(this.server);
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }
    configSockets(){
        if (socket !== null) new SocketConfig(socket);
    }
    execute(){
        this.middlewares();

        this.configSockets();

        this.server.listen(this.port, () => {
            console.log(`listen on port ${this.port}`);
        });
    }
}


export {Server};
