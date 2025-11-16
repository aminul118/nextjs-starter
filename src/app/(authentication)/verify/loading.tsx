import AuthSkeleton from '@/components/modules/Authentication/AuthSkeleton';

const loading = () => {
  return (
    <div className="center">
      <AuthSkeleton />
    </div>
  );
};

export default loading;
