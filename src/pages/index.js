import Head from 'next/head';
import { Box} from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Section } from 'src/components/section/section';
import { AboutSection } from 'src/components/section/aboutSection';
import { LendingSection } from 'src/components/section/lendingSection';
import { ActionSection } from 'src/components/section/actionSection';
import { JoinSection } from "src/components/section/joinSection"
import { PodcastSection } from 'src/components/section/podcastSection';

const Dashboard = () => {
  return(
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
        py: 8,
        paddingLeft:{xs:'16px',sm:'24px'},
        paddingRight:{xs:'16px',sm:'24px'}
      }}
    >
    <Section/>
    <AboutSection/>
    <LendingSection/>
    <ActionSection/>
    <JoinSection/>
    <PodcastSection/>

    </Box>
  </>
);
    }

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
