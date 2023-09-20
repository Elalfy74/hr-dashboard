import type {
  Entity,
  Filter,
  SortParams,
  PaginationParam,
  NullFilter,
} from '@/types';

export interface FindManyParam<T extends Entity>
  extends PaginationParam,
    SortParams<T> {
  filter?: Filter<T>;
  nullFilter?: NullFilter<T>;
  select?: string;
}

export interface FindCountParam<T extends Entity> {
  filter?: Filter<T>;
  nullFilter?: NullFilter<T>;
}

export interface FindOneParam {
  id: number;
  select?: string;
}

export interface UpdateOneParam<T extends Entity> extends FindOneParam {
  input: Filter<T>;
}
