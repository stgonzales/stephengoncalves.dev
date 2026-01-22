import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
    // Migration code

    await db.execute(sql`
        INSERT INTO "defaults" ("personal_details_name", "personal_details_role", "personal_details_location", "personal_details_email", "personal_details_phone", "updated_at", "created_at") 
        VALUES ('Stephen Goncalves', 'Software Engineer', 'Notthingham, UK', 'stephen@stephengoncalves.dev', '4407590775593', now(), now());

        INSERT INTO "metadata" ("seo_title", "seo_description", "updated_at", "created_at")
        VALUES ('Stephen Goncalves', 'Personal resume and portfolio of Stephen Goncalves', now(), now());

        INSERT INTO "defaults_socila_links_handlers" ("_order", "_parent_id", "id", "name", "handler", "icon")
        VALUES (1, 1, 'github', 'GitHub', 'stgonzales', 'github'),(2, 1, 'linkedin', 'LinkedIn', 'stephgoncalves', 'linkedin') ON CONFLICT DO NOTHING;
    `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
    // Migration code
    await db.execute(sql`
        DELETE FROM "defaults";
    `)

    await db.execute(sql`
        DELETE FROM "metadata";
    `)

    await db.execute(sql`
        DELETE FROM "defaults_socila_links_handlers";
    `)
}
