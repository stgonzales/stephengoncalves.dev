import { NextConfig } from 'next/types'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {}

export default withPayload(nextConfig)