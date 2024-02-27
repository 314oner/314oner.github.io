import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

export const getConfiguration = () =>
({
  rootRoleId: process.env.ROOT_ROLE_ID || 'c61fad2f-56ed-4efd-bb06-890f8bc6d2e2',
  globalPreFix: process.env.GLOBAL_PREFIX,
  mailer: {
    host: 'xxx',
    port: 80,
    auth: {
      user: 'xxx',
      pass: 'xxx'
    },
    secure: false //443
  },
  amap: {
    key: 'xxx'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secretKey',
    refresh: process.env.JWT_REFRESH_SECRET || 'refreshKey',
    expiresIn: process.env.JWT_EXPIRES_IN || 3600000
  },
  guardStrategy: {
    userAuth: process.env.USER_EXISTS_STRATEGY || 'local',
    jwtAuth: process.env.JWT_STRATEGY || 'jwt'
  },
  // typeorm config for prod
  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number.parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD || process.env.MYSQL_ROOT_PASSWORD || '',
    database: process.env.MYSQL_DATABASE,
    migrations: ['dist/src/migrations/**/*.js'],
    autoLoadEntities: true,
    /** https://typeorm.io/migrations */
    synchronize: true,
    logging: ['error'],
    maxQueryExecutionTime: 3000,
    timezone: '+08:00',
    cli: {
      // migrationsDir: 'src/migrations'
    }
  } as MysqlConnectionOptions,
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
    password: process.env.REDIS_PASSWORD,
    db: parseInt(process.env.REDIS_DB, 10),
    cache_ttl: parseInt(process.env.REDIS_TTL, 10)
  },
  logger: {
    timestamp: false,
    dir: process.env.LOGGER_DIR,
    maxFileSize: process.env.LOGGER_MAX_SIZE,
    maxFiles: process.env.LOGGER_MAX_FILES,
    errorLogName: process.env.LOGGER_ERROR_FILENAME,
    appLogName: process.env.LOGGER_APP_FILENAME
  },
  fileUpload: {
    dir: process.env.FILE_UPLOAD
  },
  swagger: {
    enable: process.env.SWAGGER_ENABLE === 'true',
    path: process.env.SWAGGER_PATH,
    title: process.env.SWAGGER_TITLE,
    desc: process.env.SWAGGER_DESC,
    version: process.env.SWAGGER_VERSION
  }
} as const)

export type ConfigurationType = ReturnType<typeof getConfiguration>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type ConfigurationKeyPaths = Record<NestedKeyOf<ConfigurationType>, any>
