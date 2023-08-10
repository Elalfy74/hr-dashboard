import { useState } from 'react';
import { ChevronsUpDown, Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface ComboboxProps {
  data: { value: string | number; label: string }[] | undefined;
  placeholder: string;
  value: string | number;
  handleSelect: (value?: string | number) => void;
}

export function Combobox({
  data,
  value,
  placeholder,
  handleSelect,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='flex justify-between w-full '
        >
          {value
            ? data?.find((item) => item.value == value)?.label
            : 'Select department...'}
          <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder={placeholder} className='h-9' />
          <CommandEmpty>{placeholder}</CommandEmpty>
          <CommandGroup>
            {data?.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={() => {
                  handleSelect(item.value === value ? undefined : item.value);
                  setOpen(false);
                }}
              >
                {item.label}
                <Check
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
