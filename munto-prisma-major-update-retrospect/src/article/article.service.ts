import { Injectable } from '@nestjs/common';
import { ArticleCategory } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ArticleService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findWithCategory(categories?: ArticleCategory[]) {
    return this.prismaService.article.findMany({
      where: {
        ...(categories?.length > 0 ? { category: { in: categories } } : {}),
      },
    });
  }
}
