'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || ''; // read current URL

  const [query, setQuery] = useState(searchQuery); // local state for input

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }

    // Navigate → server will re-fetch
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Input
        type="text"
        placeholder="Search team members..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // local input state
        className="w-64"
      />
      <Button onClick={handleSearch}>
        <Search /> Search
      </Button>
    </div>
  );
};

export default SearchButton;
