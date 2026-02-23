import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "kafka-proj",
  brokers: ["192.168.14.93:9092"], 
});

