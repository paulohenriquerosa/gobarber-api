import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    redis: {
      host: process.env.RADIS_HOST,
      port: process.env.RADIS_PORT,
      password: process.env.RADIS_PASS || undefined,
    },
  },
} as ICacheConfig;
