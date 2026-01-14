import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { buildConfig } from 'payload'
import { collections } from '@/collections'
import { globals } from '@/globals'

export default buildConfig({
  editor: lexicalEditor(),
  collections,
  globals,
  secret: process.env.PAYLOAD_SECRET || '',
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
})