'use client';
import NavMain from '@/components/layouts/dashboard/admin/nav-main';
import NavUser from '@/components/layouts/dashboard/admin/nav-user';
import SingleMenu from '@/components/layouts/dashboard/admin/single-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import Logo from '../../logo';
import dashboardRoutes from './DashboardRoutes';

const AppSidebar = ({ ...props }) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo className="mx-auto mt-4" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain label="Menu" items={dashboardRoutes.navMain} />
        <SingleMenu projects={dashboardRoutes.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
