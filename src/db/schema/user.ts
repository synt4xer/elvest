import { index, pgTable, serial, varchar, boolean } from 'drizzle-orm/pg-core';
import { timestamps } from '../column.helpers';

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    disabled: boolean('disabled').notNull().default(false),
    ...timestamps,
  },
  (table) => [index('email_idx').on(table.email), index('idx').on(table.id)],
);
