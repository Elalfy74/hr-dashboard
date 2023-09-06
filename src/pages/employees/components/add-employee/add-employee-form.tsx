import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { IFormState, addEmployeeSchema } from './add-employee-schema';
import { useDepartments } from '../employees-view/hooks/use-departments';
import { useAddEmployee } from './hooks/use-add-employee';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Combobox } from '@/components/ui/combobox';
import { DatePicker } from '@/components/ui/date-picker';
import { Loader } from '@/components/ui/loader';

interface AddEmployeeFormProps {
  handleClose: () => void;
}

const AddEmployeeForm = ({ handleClose }: AddEmployeeFormProps) => {
  const departments = useDepartments();
  const { addEmployee, isLoading } = useAddEmployee(handleClose);

  const form = useForm<IFormState>({
    resolver: zodResolver(addEmployeeSchema),
  });

  function onSubmit(values: IFormState) {
    addEmployee(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-y-2'
      >
        {/* Start FirstName And LastName */}
        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='first_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='First Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='last_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Last Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* End FirstName And LastName */}

        {/* Start Email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* End Email */}

        {/* Start Avatar */}
        <FormField
          control={form.control}
          name='avatar'
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <FormItem>
              <FormLabel>Avatar</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  ref={ref}
                  placeholder='avatar'
                  name={name}
                  onBlur={onBlur}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* End Email */}

        {/* Start Department And Destination */}
        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='department'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder='Select a department...'
                    data={departments}
                    handleSelect={(value) => {
                      if (value) {
                        form.setValue('department', +value);
                      } else {
                        form.resetField('department');
                      }
                    }}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='designation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input placeholder='Designation' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* End Department And Destination */}

        {/* Start Salary And Experience */}
        <div className='grid grid-cols-2 gap-5'>
          <FormField
            control={form.control}
            name='salary'
            render={({ field: { onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Salary'
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

          <FormField
            control={form.control}
            name='experience_years'
            render={({ field: { onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Experience Years</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Experience Years'
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
        </div>
        {/* End Salary And Experience */}

        {/* Start Joining Date*/}
        <FormField
          control={form.control}
          name='date_of_joining'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date Of Joining</FormLabel>
              <FormControl>
                <DatePicker
                  date={field.value}
                  handleSelect={(value) => {
                    if (value) {
                      form.setValue('date_of_joining', value);
                    } else {
                      form.resetField('date_of_joining');
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* End Joining Date*/}

        <Button type='submit' className='mt-4' disabled={isLoading}>
          {!isLoading ? 'Submit' : <Loader />}
        </Button>
      </form>
    </Form>
  );
};
export default AddEmployeeForm;
