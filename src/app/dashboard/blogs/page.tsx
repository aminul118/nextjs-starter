import DeleteConfirmation from '@/components/actions/DeleteConfirmation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Eye } from 'lucide-react';
import Link from 'next/link';

const demoBlogs = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    author: 'John Doe',
    category: 'Web Development',
    status: 'Published',
    createdAt: '2025-09-01',
  },
  {
    id: 2,
    title: 'React Server Components Explained',
    author: 'Jane Smith',
    category: 'Frontend',
    status: 'Draft',
    createdAt: '2025-08-21',
  },
  {
    id: 3,
    title: 'Mastering TypeScript',
    author: 'Alex Kim',
    category: 'Programming',
    status: 'Published',
    createdAt: '2025-08-15',
  },
];

const BlogPage = () => {
  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">📚 Demo Blogs</h1>
        <Button>
          <Link href="/dashboard/add-blogs">Add Blogs</Link>
        </Button>
      </div>

      <Table>
        <TableHeader className="bg-primary text-white">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {demoBlogs.map((blog) => (
            <TableRow key={blog.id} className="hover:bg-primary/10">
              <TableCell>{blog.id}</TableCell>
              <TableCell className="font-medium">{blog.title}</TableCell>
              <TableCell>{blog.author}</TableCell>
              <TableCell>{blog.category}</TableCell>
              <TableCell>
                {blog.status === 'Published' ? (
                  <Badge className="bg-green-600 text-white">Published</Badge>
                ) : (
                  <Badge variant="secondary">Draft</Badge>
                )}
              </TableCell>
              <TableCell>{blog.createdAt}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <DeleteConfirmation />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogPage;
