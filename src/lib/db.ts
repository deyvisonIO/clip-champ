import Redis from "ioredis"

export function createRedisInstance() {
  const redis = new Redis();
  redis.on('error', (error:unknown) => console.log("[REDIS]: Connection error!", error));
  return redis;
}

