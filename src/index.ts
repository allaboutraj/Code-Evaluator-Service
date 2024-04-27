import express, {Express} from 'express';

import serverConfig from './config/serverConfig';
import sampleQueueProducer from './producers/sampleQueueProducer';
import apiRouter from './routes';
import SampleWorker from './workers/SampleWorker';

const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`listening on port :${serverConfig.PORT}`);

    SampleWorker('SampleQueue');

    sampleQueueProducer('SampleJob' , { 
        name: "Manish",
        company: "Highradius",
        position: "ASE"
    });
});