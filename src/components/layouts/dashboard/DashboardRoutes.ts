import { BookOpen, Frame, NotebookPen, SquareTerminal } from 'lucide-react';

const dashboardRoutes = {
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
      name: 'Blogs',
      url: '/dashboard/blogs',
      icon: NotebookPen,
    },
  ],
};

export default dashboardRoutes;
