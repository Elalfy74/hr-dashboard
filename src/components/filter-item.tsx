import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterItemProps {
  defaultValue?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
  value?: string;
}

export const FilterItem = (props: FilterItemProps) => {
  const { defaultValue, options, onSelect, placeholder, value } = props;

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelect} value={value}>
      <SelectTrigger className='w-auto h-12 px-6 capitalize bg-transparent rounded-full text-zinc-50'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className='capitalize bg-mainBlack text-zinc-50'>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
