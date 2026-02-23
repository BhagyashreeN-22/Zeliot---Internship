import { kafka } from "./admin.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const producer = kafka.producer();
  await producer.connect();

  console.log("Producer connected.");
  console.log("Type a message)");

  rl.on("line", async (input) => {
    if (input.toLowerCase() === "exit") {
      await producer.disconnect();
      rl.close();
      process.exit(0);
    }

    await producer.send({
      topic: "rider-update",
      messages: [
        {
          key: "user-input",
          value: JSON.stringify({ message: input }),
        },
      ],
    });

    console.log("Message sent:", input);
  });
}

run().catch(console.error);