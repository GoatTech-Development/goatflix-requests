import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddDeletedAtToSession1733370338756 implements MigrationInterface {
    name = 'AddDeletedAtToSession1733370338756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add the deletedAt column as nullable
        await queryRunner.query(`ALTER TABLE "session" ADD "deletedAt" datetime NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the deletedAt column if we need to roll back
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "deletedAt"`);
    }
}
