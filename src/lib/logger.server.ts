import pino from "pino";
const isDevelopment = process.env.NODE_ENV === "development";

const transport = isDevelopment
  ? pino.transport({
      target: "pino-pretty",
      options: { colorize: true },
    })
  : pino.transport({
      target: "@axiomhq/pino",
      options: {
        dataset: process.env.AXIOM_DATASET,
        token: process.env.AXIOM_TOKEN,
      },
    });

export const logger = pino(
  {
    level: isDevelopment ? "debug" : "info",
  },
  transport
);
