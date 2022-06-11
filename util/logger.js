import pino from "pino";

export default pino({
    level: process.env.LOGLEVEL || 'info',
    timestamp: true,
    transport: {
        target: 'pino-pretty'
    }
});