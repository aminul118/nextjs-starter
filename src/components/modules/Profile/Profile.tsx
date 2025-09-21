'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/container';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { BadgeCheck, Edit, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { profileFormZodSchema } from './profileFormSchema';
import ProfileShow from './ProfileShow';

export enum IsActive {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  picture?: string;
  role: string;
  userId?: number;
  isActive?: IsActive;
  isVerified?: boolean;
}

// Dummy user data
const dummyUser: IUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+880123456789',
  address: 'Dhaka, Bangladesh',
  picture: '',
  role: 'User',
  userId: 101,
  isActive: IsActive.ACTIVE,
  isVerified: true,
};

export default function UserProfile() {
  const [user, setUser] = useState<IUser>(dummyUser);
  const [editProfile, setEditProfile] = useState(false);

  const form = useForm<z.infer<typeof profileFormZodSchema>>({
    resolver: zodResolver(profileFormZodSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      address: user.address || '',
    },
  });

  const onSubmit = (values: z.infer<typeof profileFormZodSchema>) => {
    setUser({ ...user, ...values });
    console.log('Updated user:', values);
    setEditProfile(false);
  };

  return (
    <Container className="mt-10 max-w-3xl">
      {/* Header */}
      <div className="mb-6 flex items-center space-x-6 border-b pb-6">
        <Avatar className="h-28 w-28">
          {user.picture ? (
            <AvatarImage src={user.picture} />
          ) : (
            <AvatarFallback>{user.firstName[0]}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h2>
            {user.isVerified && <BadgeCheck size={18} />}
          </div>

          <p className="font-medium text-gray-500 uppercase">{user.role}</p>
          <p className="mt-1 text-sm text-gray-400">User ID: {user.userId}</p>
        </div>
        <div className="ml-auto">
          <Button
            variant="default"
            onClick={() => setEditProfile(!editProfile)}
          >
            {editProfile ? (
              <>
                <X /> Cancel
              </>
            ) : (
              <>
                <Edit /> Edit Profile
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="space-y-4">
          {editProfile ? (
            <>
              <CardTitle>Edit Profile</CardTitle>
              <Separator />
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  {/* First Name */}
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Last Name */}
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email (read-only) */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled
                            className="cursor-not-allowed bg-gray-100"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-24"
                            placeholder="Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="mt-4 md:col-span-2">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </Form>
            </>
          ) : (
            <ProfileShow user={user} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
