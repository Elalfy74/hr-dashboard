import { uploadImage } from './supabase/storage';
import { BaseRepo } from './base-repo';
import type { PaginationParam } from '@/types';

import type { AddJobFormState } from '@/pages/jobs/components/add-job/add-job-schema';
import type { EditJobFormState } from '@/pages/jobs/components/edit-job/edit-job-schema';

const jobsRepo = new BaseRepo('jobs');

interface GetJobsFilter {
  active?: boolean;
}

interface GetJobsParam extends PaginationParam {
  filter: GetJobsFilter;
}

export async function getJobs(param: GetJobsParam) {
  return jobsRepo.findMany(param);
}

export async function getJobsCount(filter: GetJobsFilter) {
  return jobsRepo.findCount({ filter });
}

export async function getSingleJob(id: number) {
  return jobsRepo.findOne({ id });
}

export async function addJob(input: AddJobFormState) {
  const logoUrl = await uploadImage(input.logo, 'logos');

  return jobsRepo.create({
    ...input,
    logo: logoUrl,
  });
}

export async function deleteJob(id: number) {
  return jobsRepo.deleteOne({ id });
}

interface UpdateJobParam {
  id: number;
  input: EditJobFormState;
}

export async function updateJob({ id, input }: UpdateJobParam) {
  let logoUrl;

  if (input.logo) {
    logoUrl = await uploadImage(input.logo, 'logos');
  }

  return jobsRepo.updateOne({ id, input: { ...input, logo: logoUrl } });
}
