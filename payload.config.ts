import { fileURLToPath } from 'node:url'
import path from 'path'
import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig, SanitizedConfig } from 'payload'
import { collections } from '@/collections'
import { globals } from '@/globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname, 'src'),
      importMapFile: path.resolve(
        dirname,
        'src',
        'app',
        '(payload)',
        'admin',
        'importMap.ts',
      ), 
    },
  },
  editor: lexicalEditor(),
  collections,
  globals,
  localization: {
    locales: [
      {
        code: 'en',
        label: 'English',
      },
      {
        code: 'en-US',
        label: 'English (United States)',
      },
      {
        code: 'pt',
        label: 'Portuguese (Portugal)',
      },
      {
        code: 'pt-BR',
        label: 'Portuguese (Brazil)',
      }
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL as string,
      ...(process.env.NODE_ENV === 'production' && { authToken: process.env.DATABASE_AUTH_TOKEN as string }),
    }
  }),
  sharp,
}) satisfies Promise<SanitizedConfig>