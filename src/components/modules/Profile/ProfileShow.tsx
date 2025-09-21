import { CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { IUser } from './Profile';

const ProfileShow = ({ user }: { user: Partial<IUser> }) => {
  return (
    <>
      <CardTitle>Profile Information</CardTitle>
      <Separator className="max-w-xs" />
      <div className="space-y-2">
        <p>
          <span className="font-medium">First Name:</span> {user.firstName}
        </p>
        <p>
          <span className="font-medium">Last Name:</span> {user.lastName}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-medium">Address:</span> {user.address}
        </p>
      </div>
    </>
  );
};

export default ProfileShow;
