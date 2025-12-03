'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Columns3 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface ViewFieldsProps {
  className?: string;
  defaultColumns: Record<string, boolean>;
  onChange?: (columns: Record<string, boolean>) => void;
}

const ViewFields = ({
  className,
  defaultColumns = { name: true, email: true, status: false },
  onChange,
}: ViewFieldsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [columns, setColumns] = useState(defaultColumns);

  const toggleColumn = (key: string) => {
    const updated = { ...columns, [key]: !columns[key] };
    setColumns(updated);

    const activeFields = Object.keys(updated).filter((k) => updated[k]);
    const params = new URLSearchParams(searchParams.toString());

    if (activeFields.length > 0) {
      params.set('fields', activeFields.join(','));
    } else {
      params.delete('fields');
    }

    router.push(`?${params.toString()}`);
    onChange?.(updated);
  };

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Columns3 className="mr-2 h-4 w-4" /> View
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel className="text-xs">
            Toggle columns
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {Object.keys(columns).map((key) => (
            <DropdownMenuCheckboxItem
              key={key}
              checked={columns[key]}
              onCheckedChange={() => toggleColumn(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ViewFields;
