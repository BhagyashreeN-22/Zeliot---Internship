import {Redis} from 'ioredis';
const client = new Redis({
  host: "127.0.0.1",
  port: 6380,
});

export default client;