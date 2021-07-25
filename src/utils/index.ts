import pino, { stdTimeFunctions } from 'pino';

import { MessageBody } from '../controllers/controllers.types';

export * from './data-parsers';

export const makeMsgBody = (msg: MessageBody, payload: Record<string, any>) => ({ msg, payload });

export const logger = pino({
  name: 'Virtual-Wallet-API',
  prettyPrint: true,
  timestamp: stdTimeFunctions.isoTime,
});
