import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '../../payload-types'

// Pass your config from generated types as generic
export const cms = new PayloadSDK<Config>({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
})