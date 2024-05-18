import { Controller, Get, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { FindArticleWithCategoryQuery } from './request/find-article-with-category.request';

@Controller('articles')
export class ArticleController {
  public constructor(private readonly articleService: ArticleService) {}

  @Get()
  public async getArticles(@Query() query: FindArticleWithCategoryQuery) {
    return this.articleService.findWithCategory(query.categories);
  }
}
