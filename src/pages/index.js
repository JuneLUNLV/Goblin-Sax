import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Section } from 'src/components/section/section';
import { AboutSection } from 'src/components/section/aboutSection';
import { LendingSection } from 'src/components/section/lendingSection';
import { ActionSection } from 'src/components/section/actionSection';
import { JoinSection } from "src/components/section/joinSection"
import { FooterSection } from 'src/components/section/footerSection';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Goblin Sax
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    <Section/>
    <AboutSection/>
    <LendingSection/>
    <ActionSection/>
    <JoinSection/>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
