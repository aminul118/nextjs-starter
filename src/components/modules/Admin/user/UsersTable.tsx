'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearFilters';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import PageLimit from '@/components/common/pagination/PageLimit';
import TablePagination from '@/components/common/pagination/TablePagination';
import SearchFilter from '@/components/common/searching/SearchFilter';
import Sorting from '@/components/common/sorting/Sorting';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/ui/Container';
import DateFormat from '@/components/ui/date-format';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAllUsersInfoQuery } from '@/redux/features/user/user.api';
import { IUser } from '@/types';
import { BadgeCheck } from 'lucide-react';
import NewUserModal from './NewUserModal';
import UserActions from './user-actions';

const UsersTable = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };
  const { data, isLoading } = useAllUsersInfoQuery(params);
  console.log(data);

  if (isLoading) {
    return <TableSkeleton />;
  }
  const users = data?.data || [];
  const meta = data?.meta;

  return (
    <Container>
      {/* 🔹 Header + Filters */}
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="All Registered Users" />
      </div>

      <UsersFilters />
      {/* Main Content */}
      <TableCreate users={users} />
      <TablePagination meta={meta} />
    </Container>
  );
};

const TableCreate = ({ users }: { users: IUser[] }) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Picture</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Verify</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user, index: number) => (
          <TableRow key={user._id} className="hover:bg-primary/10">
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.picture} alt={user.fullName} />
                <AvatarFallback>
                  {user.fullName?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="font-medium">{user.role}</TableCell>
            <TableCell>
              {user.isVerified ? (
                <Badge className="bg-green-800 text-white">
                  <BadgeCheck /> Verified
                </Badge>
              ) : (
                <Badge variant="secondary">Unverified</Badge>
              )}
            </TableCell>
            <TableCell>
              <DateFormat date={user.createdAt} />
            </TableCell>
            <TableCell className="text-center">
              <UserActions user={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// Users Filter
const UsersFilters = () => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between gap-2">
        <SearchFilter />
        <div className="flex items-center justify-between gap-2">
          <RefreshButton variant="outline" />
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting
            sortOptions={[
              { name: 'Ascending', value: '-createdAt' },
              { name: 'Descending', value: 'createdAt' },
            ]}
          />

          <ClearAllFilter />
          <NewUserModal />
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
