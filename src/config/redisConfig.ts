import Redis from 'ioredis';

import Serveronfig from './serverConfig';

const redisConfig = {
    port: Serveronfig.REDIS_PORT,
    host: Serveronfig.REDIS_HOST,
    maxRetriesPerRequest: null
};

const redisConnection = new Redis(redisConfig);

export default redisConnection;