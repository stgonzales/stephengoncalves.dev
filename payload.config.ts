import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig, SanitizedConfig } from 'payload'
import { collections } from '@/collections'
import { globals } from '@/globals'

export default buildConfig({
  editor: lexicalEditor(),
  collections,
  globals,
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL as string,
      ...(process.env.NODE_ENV === 'production' && { authToken: process.env.DATABASE_AUTH_TOKEN as string }),
    }
  }),
  sharp,
}) satisfies Promise<SanitizedConfig>