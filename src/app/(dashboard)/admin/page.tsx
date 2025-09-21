import { ChartAreaInteractive } from '@/components/modules/admin/Home/ChartAreaInteractive';
import { ChartPieSimple } from '@/components/modules/admin/Home/ChartPieSimple';

const AdminDashboardHome = () => {
  return (
    <div>
      <ChartAreaInteractive />
      <ChartPieSimple />
    </div>
  );
};

export default AdminDashboardHome;
