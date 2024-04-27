import Redis from 'ioredis';

import Serveronfig from './serverConfig';

const redisConfig = {
    port: Serveronfig.REDIS_PORT,
    host: Serveronfig.REDIS_HOST
};

const redisConnection = new Redis(redisConfig);

export default redisConnection;