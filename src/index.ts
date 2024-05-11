import bodyParser from 'body-parser';
import express, {Express} from 'express';

import bullBoardAdapter from './config/bullBoardConfig';
import serverConfig from './config/serverConfig';
// import sampleQueueProducer from './producers/sampleQueueProducer';
import apiRouter from './routes';
import SampleWorker from './workers/SampleWorker';

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
    console.log(`listening on port :${serverConfig.PORT}`);
    console.log(`BullBoard dashboard running on: 
    http://localhost:${serverConfig.PORT}/ui`);

    SampleWorker('SampleQueue');

    // sampleQueueProducer('SampleJob' , { 
    //     name: "Manish",
    //     company: "Highradius",
    //     position: "ASE"
    // });
});