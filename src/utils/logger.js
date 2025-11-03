import winston from 'winston';//winston Node Js library for logging 
//It supports multiple transports, meaning logs can go to the console, 
// file, HTTP, or even external services (e.g., Logstash, Datadog).

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) =>
      `[${timestamp}] ${level.toUpperCase()}: ${message}`
    )
  ),
  transports: [new winston.transports.Console()],
});

export const logInfo = msg => logger.info(msg);
export const logError = msg => logger.error(msg);
