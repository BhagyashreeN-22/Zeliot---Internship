import { kafka } from "./admin.js";

async function run() {
  const consumer = kafka.consumer({ groupId: "rider-group" });

  await consumer.connect();
  await consumer.subscribe({ topic: "rider-update", fromBeginning: true });

  console.log("Consumer running...");

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const data = JSON.parse(message.value.toString());

      console.log(
        `Received from partition ${partition}:`,
        data.message
      );
    },
  });
}

run().catch(console.error);