import { Label } from './label';

export const TextField = ({ label, text }: { label: string; text: string }) => (
  <div>
    <Label>{label}</Label>
    <p className='text-sm text-mainBlack'>{text}</p>
  </div>
);
