'use client';
import NavMain from '@/components/layouts/dashboard/nav-main';
import NavUser from '@/components/layouts/dashboard/nav-user';
import SingleMenu from '@/components/layouts/dashboard/single-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { BookOpen, Frame, PanelsTopLeft, SquareTerminal } from 'lucide-react';
import Logo from '../logo';

const data = {
  navMain: [
    {
      title: 'Playground',
      url: '/',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Check',
      url: '/dashboard/check',
      icon: Frame,
    },
    {
      name: 'People',
      url: '#',
      icon: PanelsTopLeft,
    },
  ],
};

const AppSidebar = ({ ...props }) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SingleMenu label="Project" projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
