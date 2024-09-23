import { plainToClass } from 'class-transformer';
import { IsEnum, IsNumber, validateSync, IsString } from 'class-validator';

enum EnvironmentType {
  Local = 'local',
  Dev = 'dev',
  Prod = 'prod',
}

class EnviromentVariables {
  @IsEnum(EnvironmentType)
  NODE_ENV: EnvironmentType;

  @IsNumber()
  PORT: number;

  @IsString()
  DATABASE_URL: string;

  @IsString()
  CLOUD_APIKEY: string;
  @IsString()
  SERVER_API_KEY: string;
}

export function validate(configuration: Record<string, unknown>) {
  const finalConfig = plainToClass(EnviromentVariables, configuration, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(finalConfig, { skipMissingProperties: true });

  if (errors.length > 0) throw new Error(errors.toString());

  return finalConfig;
}
