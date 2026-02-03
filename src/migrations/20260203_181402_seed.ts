import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`
    INSERT INTO \`defaults\` (\`personal_details_name\`, \`personal_details_role\`, \`personal_details_location\`, \`personal_details_email\`, \`personal_details_phone\`, \`updated_at\`, \`created_at\`)
    VALUES ('Stephen Goncalves', 'Software Engineer', 'Notthingham, UK', 'stephen@stephengoncalves.dev', '4407590775593', datetime('now'), datetime('now'));
  `)
  await db.run(sql`
    INSERT INTO \`metadata\` (\`seo_title\`, \`seo_description\`, \`updated_at\`, \`created_at\`)
    VALUES ('Stephen Goncalves', 'Personal resume and portfolio of Stephen Goncalves', datetime('now'), datetime('now'));
  `)
  await db.run(sql`
    INSERT OR IGNORE INTO \`defaults_socila_links_handlers\` (\`_order\`, \`_parent_id\`, \`id\`, \`name\`, \`handler\`, \`icon\`)
    VALUES (1, 1, 'github', 'GitHub', 'stgonzales', 'github'), (2, 1, 'linkedin', 'LinkedIn', 'stephgoncalves', 'linkedin');
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DELETE FROM \`defaults_socila_links_handlers\`;`)
  await db.run(sql`DELETE FROM \`defaults\`;`)
  await db.run(sql`DELETE FROM \`metadata\`;`)
}
