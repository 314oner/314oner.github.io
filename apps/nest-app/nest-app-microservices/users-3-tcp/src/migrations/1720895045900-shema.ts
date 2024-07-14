import { MigrationInterface, QueryRunner } from 'typeorm';

export class Shema1720895045900 implements MigrationInterface {
  name = 'Shema1720895045900';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "payment_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "price" integer, "status" varchar NOT NULL DEFAULT ('NEW'), "order_id" integer NOT NULL DEFAULT (0))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tag_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar, "description" varchar, "color" varchar)`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_entity" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "email" varchar(255) NOT NULL, "password" varchar NOT NULL, "is_confirmed" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "UQ_9b998bada7cff93fcb953b0c37e" UNIQUE ("username"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "like_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "user_id" varchar, "post_id" integer)`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "text" varchar NOT NULL, "date_and_time_publish" datetime, "UserId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE INDEX "UserId" ON "post_entity" ("UserId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "order_entity" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar, "phone" varchar, "price" integer, "status" varchar NOT NULL DEFAULT ('NEW'), "create_timestamp" datetime NOT NULL DEFAULT (datetime('now')), "update_timestamp" datetime NOT NULL DEFAULT (datetime('now')), "payment_id" integer NOT NULL DEFAULT (0))`,
    );
    await queryRunner.query(
      `CREATE TABLE "token_entity" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar(255) NOT NULL, "token" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_like_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "user_id" varchar, "post_id" integer, CONSTRAINT "FK_e12fd39fa5c0856dc583e166ffd" FOREIGN KEY ("user_id") REFERENCES "user_entity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0adfaab968ff5933af5ac929230" FOREIGN KEY ("post_id") REFERENCES "post_entity" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_like_entity"("id", "user_id", "post_id") SELECT "id", "user_id", "post_id" FROM "like_entity"`,
    );
    await queryRunner.query(`DROP TABLE "like_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_like_entity" RENAME TO "like_entity"`,
    );
    await queryRunner.query(`DROP INDEX "UserId"`);
    await queryRunner.query(
      `CREATE TABLE "temporary_post_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "text" varchar NOT NULL, "date_and_time_publish" datetime, "UserId" varchar NOT NULL, CONSTRAINT "FK_c289aff6b2a7f11c8a8459537dc" FOREIGN KEY ("UserId") REFERENCES "user_entity" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_post_entity"("id", "title", "text", "date_and_time_publish", "UserId") SELECT "id", "title", "text", "date_and_time_publish", "UserId" FROM "post_entity"`,
    );
    await queryRunner.query(`DROP TABLE "post_entity"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_post_entity" RENAME TO "post_entity"`,
    );
    await queryRunner.query(
      `CREATE INDEX "UserId" ON "post_entity" ("UserId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "UserId"`);
    await queryRunner.query(
      `ALTER TABLE "post_entity" RENAME TO "temporary_post_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "text" varchar NOT NULL, "date_and_time_publish" datetime, "UserId" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "post_entity"("id", "title", "text", "date_and_time_publish", "UserId") SELECT "id", "title", "text", "date_and_time_publish", "UserId" FROM "temporary_post_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_post_entity"`);
    await queryRunner.query(
      `CREATE INDEX "UserId" ON "post_entity" ("UserId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "like_entity" RENAME TO "temporary_like_entity"`,
    );
    await queryRunner.query(
      `CREATE TABLE "like_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "user_id" varchar, "post_id" integer)`,
    );
    await queryRunner.query(
      `INSERT INTO "like_entity"("id", "user_id", "post_id") SELECT "id", "user_id", "post_id" FROM "temporary_like_entity"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_like_entity"`);
    await queryRunner.query(`DROP TABLE "token_entity"`);
    await queryRunner.query(`DROP TABLE "order_entity"`);
    await queryRunner.query(`DROP INDEX "UserId"`);
    await queryRunner.query(`DROP TABLE "post_entity"`);
    await queryRunner.query(`DROP TABLE "like_entity"`);
    await queryRunner.query(`DROP TABLE "user_entity"`);
    await queryRunner.query(`DROP TABLE "tag_entity"`);
    await queryRunner.query(`DROP TABLE "payment_entity"`);
  }
}
