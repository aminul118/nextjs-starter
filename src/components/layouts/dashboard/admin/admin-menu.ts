import { MenuGroup } from '@/types';
import { CalendarDays, Gauge, Lock, Users } from 'lucide-react';

export const adminSidebarmenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      {
        name: 'Dashboard',
        url: '/admin',
        icon: Gauge,
      },
      {
        name: 'Events',
        url: '#',
        icon: CalendarDays,
        subMenu: [
          { name: 'Upcoming Events', url: '/admin/upcoming-events' },
          { name: 'Previous Event', url: '/admin/previous-events' },
        ],
      },
      {
        name: 'Registered Users',
        url: '/admin/users',
        icon: Users,
      },

      {
        name: 'Change Password',
        url: '/admin/change-password',
        icon: Lock,
      },
    ],
  },
];
