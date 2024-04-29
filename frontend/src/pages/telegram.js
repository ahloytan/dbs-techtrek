import Head from 'next/head';
import {
    Box,
    Button,
    Container,
    SvgIcon,
  } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useAuthContext } from '@/contexts/auth-context';

const Page = () => {
  const { user } = useAuthContext();
  const uniqueCode = user ? user.uniqueCode : null; 

  return (
      <>
        <Head>
          <title>
            Telegram | DBS TechTrek
          </title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="xl">
            <Button
                startIcon={(
                <SvgIcon fontSize="small">
                    <PaperAirplaneIcon />
                </SvgIcon>
                )}
                sx={{ "margin": "0px 15px 5px 0" }}
                variant="contained"
                target="_blank" 
                href={`https://t.me/dbstechtrekbot?start=${uniqueCode}`}
                disabled={!uniqueCode}
            >
                Connect Telegram
            </Button>
          </Container>
        </Box>
      </>

    )
}


Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default Page;