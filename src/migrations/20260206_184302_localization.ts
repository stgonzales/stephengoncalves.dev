import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`defaults_socila_links_handlers\` RENAME TO \`defaults_social_links_handlers\`;`)
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
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_defaults_social_links_handlers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`handler\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`defaults\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_defaults_social_links_handlers\`("_order", "_parent_id", "id", "name", "handler", "icon") SELECT "_order", "_parent_id", "id", "name", "handler", "icon" FROM \`defaults_social_links_handlers\`;`)
  await db.run(sql`DROP TABLE \`defaults_social_links_handlers\`;`)
  await db.run(sql`ALTER TABLE \`__new_defaults_social_links_handlers\` RENAME TO \`defaults_social_links_handlers\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`defaults_social_links_handlers_order_idx\` ON \`defaults_social_links_handlers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`defaults_social_links_handlers_parent_id_idx\` ON \`defaults_social_links_handlers\` (\`_parent_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`defaults_social_links_handlers\` RENAME TO \`defaults_socila_links_handlers\`;`)
  await db.run(sql`DROP TABLE \`about_me\`;`)
  await db.run(sql`DROP TABLE \`about_me_locales\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_defaults_socila_links_handlers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`handler\` text NOT NULL,
  	\`icon\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`defaults\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_defaults_socila_links_handlers\`("_order", "_parent_id", "id", "name", "handler", "icon") SELECT "_order", "_parent_id", "id", "name", "handler", "icon" FROM \`defaults_socila_links_handlers\`;`)
  await db.run(sql`DROP TABLE \`defaults_socila_links_handlers\`;`)
  await db.run(sql`ALTER TABLE \`__new_defaults_socila_links_handlers\` RENAME TO \`defaults_socila_links_handlers\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`defaults_socila_links_handlers_order_idx\` ON \`defaults_socila_links_handlers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`defaults_socila_links_handlers_parent_id_idx\` ON \`defaults_socila_links_handlers\` (\`_parent_id\`);`)
}
