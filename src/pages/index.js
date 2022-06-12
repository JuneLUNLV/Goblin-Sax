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
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

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
    {/* <Box sx={{ minWidth: 120,display:'flex',"alignContent":"center","justifyContent":"center","alignItems":"center",mt:'100px' }}>
      <h1 style={{color:'white',marginRight:"50px"}}>Select the podcast section style: </h1>
      {podcastStyleArray.length == 0? void(0) : 
        <FormControl style={{border: '1px solid white', width:"fit-content"}}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          value={podcastStyle}
          autoWidth
          onChange={handleChange}
          style={{color:"white"}}
          renderValue={(selected) => {
              return <em>{selected}</em>;
          }}
        >
          {
            podcastStyleArray.map((item,index)=>{
              return(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>  
      }

    </Box>
    {podcastStyle == 'style 1' ? <PodcastSection/> : void(0)}
    {podcastStyle == 'style 2' ? <PodcastSectionTwo/>: void(0)}
    {podcastStyle == 'style 3' ? <PodcastSectionThree/> : void(0)} */}
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
