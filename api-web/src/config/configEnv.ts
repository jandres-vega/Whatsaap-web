import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

const configEnv = {
    port_server: process.env.PORT_SERVER
};

export {configEnv};
