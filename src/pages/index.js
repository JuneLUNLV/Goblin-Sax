import Head from 'next/head';
import { Box,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Section } from 'src/components/section/section';
import { AboutSection } from 'src/components/section/aboutSection';
import { LendingSection } from 'src/components/section/lendingSection';
import { ActionSection } from 'src/components/section/actionSection';
import { JoinSection } from "src/components/section/joinSection"
import { PodcastSection } from 'src/components/section/podcastSection';
import { PodcastSectionTwo } from 'src/components/section/pordcastSectionTwo';
import { PodcastSectionThree } from 'src/components/section/podcastSectionThree';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Counter } from 'src/components/counter/Counter';


const Dashboard = () => {

  const podcastStyleArray = ['style 1','style 2','style 3'];
  // const [podcastStyle,setPodcastStyle] = useState(podcastStyleArray[1])
  // const handleChange = (event) => {
  //   setPodcastStyle(event.target.value);
  // };
  return(
  <>
    <Head>
      <title>
        Goblin Sax
      </title>
      <link href="/static/style/landing_style.css" rel="stylesheet" key="test"/>
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
    <Fade bottom>
      <AboutSection/>
      <LendingSection/>
      <ActionSection/>
      <PodcastSectionTwo/>
      <JoinSection/>
    </Fade>
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
