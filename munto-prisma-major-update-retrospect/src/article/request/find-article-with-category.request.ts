import { ArticleCategory } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsOptional } from 'class-validator';

export class FindArticleWithCategoryQuery {
  @IsOptional()
  @IsArray()
  @IsEnum(ArticleCategory, { each: true })
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  public categories?: ArticleCategory[];
}
