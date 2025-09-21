'use client';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface IProject {
  label?: string;
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}

const SingleMenu = ({ projects, label }: IProject) => {
  const { state } = useSidebar();

  return (
    <SidebarGroup className="my-0 py-0">
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton className="py-0" asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                {/* Tooltip shows only useful when sidebar is collapsed */}
                {state === 'collapsed' && (
                  <TooltipContent side="right">{item.name}</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SingleMenu;
