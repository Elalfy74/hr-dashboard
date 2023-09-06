import { AddJobFormState } from '@/pages/jobs/add-job/add-job-schema';
import { supabase } from './supabase';
import { uploadImage } from './storage';

interface GetJobsFilter {
  active: boolean;
}

export async function getJobs(
  page = 1,
  itemsPerPage = 10,
  filter?: GetJobsFilter
) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  const query = supabase.from('jobs').select();

  if (filter) {
    query.eq('active', filter.active);
  }

  query.range(startIndex, endIndex);

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}

export async function getJobsCount() {
  const { count, error } = await supabase
    .from('jobs')
    .select('*', { count: 'exact', head: true });

  if (error) throw new Error(error.message);

  return count;
}

export async function addJob(input: AddJobFormState) {
  const logoUrl = await uploadImage(input.logo, 'logos');

  const { error } = await supabase.from('jobs').insert({
    ...input,
    logo: logoUrl,
  });

  if (error) throw new Error(error.message);
}

export async function deleteJob(id: number) {
  const { error } = await supabase.from('jobs').delete().eq('id', id);

  if (error) throw new Error(error.message);
}
