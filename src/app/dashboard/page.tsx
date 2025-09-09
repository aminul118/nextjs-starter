import { ChartAreaInteractive } from '@/components/modules/DashboardHome/ChartAreaInteractive';
import { ChartPieSimple } from '@/components/modules/DashboardHome/ChartPieSimple';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Dashboard Home',
};
// >> SEO End

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <ChartAreaInteractive />
      <ChartPieSimple />
    </div>
  );
};

export default DashboardHome;
