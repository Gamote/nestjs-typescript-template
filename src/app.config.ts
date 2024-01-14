import { ZodConfig } from 'nestjs-zod-config';
import { z } from 'zod';

/**
 * The zod validation schema for the app config.
 * In here you can define the config schema for the app.
 */
const appConfigSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('development'),
  HOSTNAME: z.string().min(1).default('0.0.0.0'),
  PORT: z.coerce.number().default(3000),
});

export class AppConfig extends ZodConfig(appConfigSchema) {}
