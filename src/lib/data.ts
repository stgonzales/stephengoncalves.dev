import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '../../payload-types'

// Pass your config from generated types as generic
export const cms = new PayloadSDK<Config>({
  baseURL: 'http://localhost:3000/api',
})