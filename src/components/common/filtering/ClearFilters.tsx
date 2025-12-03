'use client';

import { Button } from '@/components/ui/button';
import { Undo } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const ClearFilters = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClear = () => {
    router.replace(pathname);
  };

  return (
    <Button onClick={handleClear}>
      <Undo size={20} /> Clear Filter
    </Button>
  );
};

export default ClearFilters;
