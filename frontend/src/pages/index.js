import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DashboardAdmin } from '@/sections/overview/dashboard-admin';
import { DashboardUser } from '@/sections/overview/dashboard-user';
import { useAuthContext } from 'src/contexts/auth-context';

const Page = () => {
  const { user } = useAuthContext();
  const { isAdmin } = user || false; 

  return (
    <>
      <Head>
        <title>
          Overview | DBS TechTrek 2024
        </title>
      </Head>
        {isAdmin ? <DashboardAdmin/> : <DashboardUser/> }
    </>
  )
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
