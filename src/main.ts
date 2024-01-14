import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from '@src/app.module';

/**
 * Returns a new FastifyAdapter instance to be used by the NestJS application as adapter.
 *
 * It has been extracted into a function to be able to mock it in the tests.
 */
export const getAdapter = () => new FastifyAdapter();

/**
 * The main entrypoint of the application.
 */
const main = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, getAdapter());

  await app.listen(3000, '0.0.0.0');
};

void main();
