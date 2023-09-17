import type { Entity, Filter, PaginationParam } from '@/types';

export interface FindManyParam<T extends Entity> extends PaginationParam {
  filter?: Filter<T>;
  select?: string;
}

export interface FindCountParam<T extends Entity> {
  filter?: Filter<T>;
}

export interface FindOneParam {
  id: number;
  select?: string;
}

export interface UpdateOneParam<T extends Entity> extends FindOneParam {
  input: Filter<T>;
}
