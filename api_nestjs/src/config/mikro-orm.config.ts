import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const mikroOrmConfig: Options = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  dbName: 'yggdrasil-dev',
  type: 'postgresql',
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: 5432,
  forceUtcTimezone: true,
  forceUndefined: true, // by default nullable are hydrated as null - this forces undefined
  driverOptions: {
    connection: { ssl: true },
  },
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
    tableName: 'migrations',
    allOrNothing: true,
    transactional: true,
  },
  seeder: {
    path: 'dist/config',
    pathTs: 'src/config',
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}',
    emit: 'ts',
    fileName: (className: string) => className,
  },
};

export default mikroOrmConfig;
