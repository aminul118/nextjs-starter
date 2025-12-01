'use client';

import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { logoutAction } from '@/services/auth/logout';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  return (
    <DropdownMenuItem asChild className="p-0">
      <form action={logoutAction}>
        <Button type="submit" size="sm" variant="ghost">
          <LogOut /> Log out
        </Button>
      </form>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
