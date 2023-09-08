import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader } from '@/components/ui/loader';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { AddJobFormState, addJobSchema } from './add-job-schema';
import { useAddJob } from './hooks/use-add-job';

interface AddJobFormProps {
  onDone: () => void;
}

export const AddJobForm = ({ onDone }: AddJobFormProps) => {
  const { addJob, addJobLoading } = useAddJob(onDone);

  const form = useForm<AddJobFormState>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      full_time: true,
      remote: false,
      active: true,
    },
  });

  function onSubmit(values: AddJobFormState) {
    addJob(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-y-2'
      >
        {/* Start Title */}
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='Title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Start Description */}
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder='Description' type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* End Description */}

        {/* Start Logo */}
        <FormField
          control={form.control}
          name='logo'
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <FormItem>
              <FormLabel>Logo</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  ref={ref}
                  placeholder='logo'
                  name={name}
                  onBlur={onBlur}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Open Positions */}
        <FormField
          control={form.control}
          name='open_positions'
          render={({ field: { onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Open Positions</FormLabel>
              <FormControl>
                <Input
                  placeholder='Open Positions'
                  type='number'
                  {...fieldProps}
                  onChange={({ target: { value } }) => {
                    if (!Number.isNaN(+value)) {
                      onChange(+value);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-2 gap-5'>
          {/* Full Time Or Part Time */}
          <FormField
            control={form.control}
            name='full_time'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(Boolean(+e));
                    }}
                    defaultValue={field.value ? '1' : '0'}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='1'>Full Time</SelectItem>
                        <SelectItem value='0'>Part Time</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Remote Or WFO */}
          <FormField
            control={form.control}
            name='remote'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Location</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(e) => {
                      field.onChange(Boolean(+e));
                    }}
                    defaultValue={field.value ? '1' : '0'}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='1'>Remote</SelectItem>
                        <SelectItem value='0'>WFO</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Active Or Inactive */}
        <FormField
          control={form.control}
          name='active'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start py-2 space-x-3 space-y-0 '>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>Active</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type='submit' className='mt-4' disabled={addJobLoading}>
          {!addJobLoading ? 'Submit' : <Loader />}
        </Button>
      </form>
    </Form>
  );
};
