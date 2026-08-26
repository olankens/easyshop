import { ConfigService } from '@nestjs/config';
import { sql } from 'drizzle-orm';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const DRIZZLE = Symbol('DRIZZLE');
export type DrizzleDB = PostgresJsDatabase<Record<string, never>>;
export const DrizzleProvider = {
  provide: DRIZZLE,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<DrizzleDB> => {
    const connectionString = configService.getOrThrow<string>(
      'POSTGRES_DATABASE_URL',
    );
    const client = postgres(connectionString);
    const db = drizzle(client, {});
    await db.execute(sql`select 1`);
    return db;
  },
};
