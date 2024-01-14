import { Test } from '@nestjs/testing';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { describe, beforeEach, it, expect, vi } from 'vitest';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
    appController = moduleRef.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('should return "Hi"', async () => {
      expect(await appController.getHello()).toBe('Hi');
    });

    it('should return what `AppService.getHello()` is returning', async () => {
      const result = `Hello, it's me`;
      vi.spyOn(appService, 'getHello').mockImplementation(() => Promise.resolve(result));

      expect(await appController.getHello()).toBe(result);
    });
  });
});
