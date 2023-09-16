import { supabase } from '../supabase/client';
import type { CreateEntity, Entity } from '@/types';

import {
  FindManyParam,
  FindCountParam,
  FindOneParam,
  UpdateOneParam,
} from './base.types';

export class BaseRepo<T extends Entity> {
  constructor(private entity: T) {}

  async findMany(param: FindManyParam<T>) {
    const { page = 1, itemsPerPage = 10, filter, select } = param;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage - 1;

    const query = supabase.from(this.entity).select();

    if (this.entity === 'employees') query.select(select);

    for (const key in filter) {
      if (filter[key] === undefined) continue;

      query.eq(key, filter[key]);
    }

    query.range(startIndex, endIndex);

    const { data, error } = await query;

    if (error) throw new Error(error.message);

    return data;
  }

  async findCount({ filter }: FindCountParam<T>) {
    const query = supabase
      .from(this.entity)
      .select('*', { count: 'exact', head: true });

    for (const key in filter) {
      if (filter[key] === undefined) continue;

      query.eq(key, filter[key]);
    }

    const { count, error } = await query;

    if (error) throw new Error(error.message);

    return count;
  }

  async findOne({ id }: FindOneParam) {
    const { data, error } = await supabase
      .from(this.entity)
      .select()
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);

    return data;
  }

  async create(input: CreateEntity<T>) {
    const { error } = await supabase.from(this.entity as Entity).insert(input);

    if (error) throw new Error(error.message);
  }

  async deleteOne({ id }: FindOneParam) {
    const { error } = await supabase.from(this.entity).delete().eq('id', id);

    if (error) throw new Error(error.message);
  }

  async updateOne({ id, input }: UpdateOneParam<T>) {
    const { error } = await supabase
      .from(this.entity as Entity)
      .update(input)
      .eq('id', id);

    if (error) throw new Error(error.message);
  }
}
