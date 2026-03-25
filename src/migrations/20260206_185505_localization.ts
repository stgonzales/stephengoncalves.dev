import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // await db.run(sql`ALTER TABLE \`defaults_socila_links_handlers\` RENAME TO \`defaults_social_links_handlers\`;`)
  await db.run(sql`CREATE TABLE \`about_me\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`about_me_locales\` (
  	\`content\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_me\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`about_me_locales_locale_parent_id_unique\` ON \`about_me_locales\` (\`_locale\`,\`_parent_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // await db.run(sql`ALTER TABLE \`defaults_social_links_handlers\` RENAME TO \`defaults_socila_links_handlers\`;`)
  await db.run(sql`DROP TABLE \`about_me\`;`)
  await db.run(sql`DROP TABLE \`about_me_locales\`;`)
}
