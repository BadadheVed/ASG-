import cluster from "cluster";
import os from "os";
import { app } from ".";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log("total cpus", numCPUs);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  app.listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
