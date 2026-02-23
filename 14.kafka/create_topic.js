import { kafka } from "./admin.js";

async function init() {
  const admin = kafka.admin();

  await admin.connect();

  await admin.createTopics({
    topics: [
      {
        topic: "rider-update",
        numPartitions: 2,
      },
      {
        topic:"order-group",
        numPartitions:1,
      }
    ],
  });

  console.log("Topic created");

  await admin.disconnect();
}

init().catch(console.error);