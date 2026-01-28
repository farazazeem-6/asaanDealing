import pino from 'pino';

const isDevelopment = process.env.NODE_ENV === 'development';

let transport;

if (isDevelopment) {
  transport = pino.transport({
    target: 'pino-pretty',
    options: { colorize: true },
  });
} else {
  const dataset = process.env.AXIOM_DATASET;
  const token = process.env.AXIOM_TOKEN;

  if (!dataset || !token) {
    throw new Error('AXIOM_DATASET and AXIOM_TOKEN must be set in production!');
  }

  transport = pino.transport({
    target: '@axiomhq/pino',
    options: {
      dataset,
      token,
    },
  });
}

export const logger = pino(
  {
    level: isDevelopment ? 'debug' : 'info',
  },
  transport,
);
