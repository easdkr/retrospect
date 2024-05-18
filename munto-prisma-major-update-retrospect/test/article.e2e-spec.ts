import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Article (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    await app.init();
  });

  describe('/articles (GET)', () => {
    it('단일 카테고리로 검색', async () => {
      const res = await request(app.getHttpServer()).get('/articles').query({
        categories: 'SPORTS',
      });

      expect(res.status).toBe(200);
    });

    it('다중 카테고리로 검색', async () => {
      const res = await request(app.getHttpServer())
        .get('/articles')
        .query({
          categories: ['SPORTS', 'BUSINESS'],
        });

      expect(res.status).toBe(200);
    });

    it('(카테고리 쿼리가 없는 경우) 모든 카테고리로 검색', async () => {
      const res = await request(app.getHttpServer()).get('/articles');

      expect(res.status).toBe(200);
    });
  });
});
