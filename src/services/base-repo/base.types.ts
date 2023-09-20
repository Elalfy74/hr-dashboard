import type { Entity, Filter, SortParams, PaginationParam } from '@/types';

export interface FindManyParam<T extends Entity>
  extends PaginationParam,
    SortParams<T> {
  filter?: Filter<T>;
  select?: string;
}

export interface FindCountParam<T extends Entity> {
  filter?: Filter<T>;
  likeFilter?: Filter<T>;
  nullFilter?: (keyof Filter<T>)[];
}

export interface FindOneParam {
  id: number;
  select?: string;
}

export interface UpdateOneParam<T extends Entity> extends FindOneParam {
  input: Filter<T>;
}
