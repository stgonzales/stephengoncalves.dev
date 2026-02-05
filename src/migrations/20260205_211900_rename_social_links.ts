import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

/**
 * Rename defaults_socila_links_handlers to defaults_social_links_handlers
 * to fix typo: socilaLinks → socialLinks.
 * No-op if the old table does not exist (e.g. dev DB created with fixed schema).
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  const { rows } = await db.run(
    sql`SELECT name FROM sqlite_master WHERE type='table' AND name='defaults_socila_links_handlers'`
  )
  if (!rows?.length) return // Table already has new name or was created with correct schema

  await db.run(sql`ALTER TABLE \`defaults_socila_links_handlers\` RENAME TO \`defaults_social_links_handlers\``)
  await db.run(sql`DROP INDEX IF EXISTS \`defaults_socila_links_handlers_order_idx\``)
  await db.run(sql`DROP INDEX IF EXISTS \`defaults_socila_links_handlers_parent_id_idx\``)
  await db.run(sql`CREATE INDEX \`defaults_social_links_handlers_order_idx\` ON \`defaults_social_links_handlers\` (\`_order\`)`)
  await db.run(sql`CREATE INDEX \`defaults_social_links_handlers_parent_id_idx\` ON \`defaults_social_links_handlers\` (\`_parent_id\`)`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  const { rows } = await db.run(
    sql`SELECT name FROM sqlite_master WHERE type='table' AND name='defaults_social_links_handlers'`
  )
  if (!rows?.length) return

  await db.run(sql`ALTER TABLE \`defaults_social_links_handlers\` RENAME TO \`defaults_socila_links_handlers\``)
  await db.run(sql`DROP INDEX IF EXISTS \`defaults_social_links_handlers_order_idx\``)
  await db.run(sql`DROP INDEX IF EXISTS \`defaults_social_links_handlers_parent_id_idx\``)
  await db.run(sql`CREATE INDEX \`defaults_socila_links_handlers_order_idx\` ON \`defaults_socila_links_handlers\` (\`_order\`)`)
  await db.run(sql`CREATE INDEX \`defaults_socila_links_handlers_parent_id_idx\` ON \`defaults_socila_links_handlers\` (\`_parent_id\`)`)
}
