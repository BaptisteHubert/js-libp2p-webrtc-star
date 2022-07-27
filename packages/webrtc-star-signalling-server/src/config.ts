// @ts-nocheck
import { logger } from '@libp2p/logger'

const log = logger('signalling-server')

export const config = {
  log: log,
  hapi: {
    port: process.env.PORT ?? 4201,
    host: '127.0.0.1',
    options: {
      routes: {
        cors: true
      }
    }
  },
  refreshPeerListIntervalMS: 10000
}
