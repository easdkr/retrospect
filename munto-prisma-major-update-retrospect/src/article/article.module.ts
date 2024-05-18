import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  providers: [PrismaService, ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
