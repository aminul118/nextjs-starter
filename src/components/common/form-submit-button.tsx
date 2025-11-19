'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import ButtonSpinner from './loader/ButtonSpinner';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FormSubmitButton = ({ children, className, ...props }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={className} disabled={pending} {...props}>
      {pending ? <ButtonSpinner /> : children}
    </Button>
  );
};

export default FormSubmitButton;
