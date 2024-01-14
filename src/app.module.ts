import { Module } from '@nestjs/common';
import { AppConfig } from '@src/app.config';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { ZodConfigModule } from 'nestjs-zod-config';

@Module({
  imports: [
    ZodConfigModule.forRoot({
      service: AppConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
