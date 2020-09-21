"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rateLimiter;

var _redis = _interopRequireDefault(require("redis"));

var _rateLimiterFlexible = require("rate-limiter-flexible");

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redisClient = _redis.default.createClient({
  host: process.env.RADIS_HOST,
  port: Number(process.env.RADIS_PORT),
  password: process.env.RADIS_PASS || undefined
});

const limiter = new _rateLimiterFlexible.RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'ratelimit',
  points: 5,
  duration: 1
});

async function rateLimiter(request, response, next) {
  try {
    await limiter.consume(request.ip);
    return next();
  } catch {
    throw new _AppError.default('Too much requests', 429);
  }
}