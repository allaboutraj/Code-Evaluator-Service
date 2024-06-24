import bodyParser from "body-parser";
import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
import runCpp from "./containers/runCpp";
// import runJava from "./containers/runJavaDocker";
// import runPython from './containers/runPythonDocker';
// import sampleQueueProducer from './producers/sampleQueueProducer';
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/api", apiRouter);
app.use("/ui", bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`listening on port :${serverConfig.PORT}`);
  console.log(`BullBoard dashboard running on: 
    http://localhost:${serverConfig.PORT}/ui`);

  SampleWorker("SampleQueue");

  // const code = `print("hello")`;

  // const code = `x = input()
  // y = input()
  // print("value of x is", x)
  // print("value of y is", y)
  // `;

  // const inputCase = `100
  // 200
  // `;

  // runPython(code, inputCase);
  // const code = `
  // import java.util.*;
  // public class Main{
  //     public static void main(String[] args){
  //         Scanner sc = new Scanner(System.in);
  //         int input = sc.nextInt();
  //         System.out.println("Input Value given by User: " + input);
  //         for(int i=0;i<input;i++){
  //             System.out.println(i);
  //         }
  //     }
  // }
  // `;
  // const inputCase = `10`;

  // runJava(code, inputCase);

  const code = `
    #include<iostream> 
    using namespace std;
    int Main(){

      int x;
      cin>>x;
      cout<<"Value of x is"<<x<<endl;
      for(int i=0;i<x;i++){
        cout<<i<<" ";
      }
      cout<<endl;
      return 0;
    }
    `;
  const inputCase = `10
  `;

  runCpp(code, inputCase);

  // sampleQueueProducer('SampleJob' , {
  //     name: "Manish",
  //     company: "Highradius",
  //     position: "ASE"
  // });
});
