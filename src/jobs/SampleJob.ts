import { Job } from '../types/bullMqJobDefinition';


class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;
    constructor( payload: Record<string, unknown>){
        this.payload = payload;
        this.name = this.constructor.name;
    }

    handle = () => {
        console.log("Handler of the job called")
    };

    failed = (job?: Job) : void => {
        console.log("Job Failed");
        if(job){
            console.log(job.id);
        }
    };
}