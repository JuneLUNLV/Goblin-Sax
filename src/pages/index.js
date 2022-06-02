import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Section } from 'src/components/section/section';
import { AboutSection } from 'src/components/section/aboutSection';
import { LendingSection } from 'src/components/section/lendingSection';
import { ActionSection } from 'src/components/section/actionSection';
import { JoinSection } from "src/components/section/joinSection"
import {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dashboard = () => {
  // const [fontArray,setFontArray] = useState([]);
  // const [fontChose,setFontChose] = useState("Imperial Roman")
  // useEffect(() => {
  //   let { fonts } = document;
  //   const it = fonts.entries();
  
  //   let arr = [];
  //   let done = false;
  
  //   while (!done) {
  //     const font = it.next();
  //     if (!font.done) {
  //       arr.push(font.value[0].family);
  //     } else {
  //       done = font.done;
  //     }
  //   }

  //   let fontsArr = [...new Set(arr)];
  //   setFontArray(fontsArr);
  //   setFontChose("Imperial Roman")
  // },[]);

  // const handleChange = (event) => {
  //   setFontChose(event.target.value);
  //   var r = document.querySelector(':root');
  //   r.style.setProperty('--main-header-font', event.target.value);
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
    {/* <Box sx={{ minWidth: 120,display:'flex',"alignContent":"center","justifyContent":"center","alignItems":"center" }}>
      <h1 style={{color:'white',marginRight:"50px"}}>Select the header font family: </h1>
      {fontArray.length == 0? void(0) : 
        <FormControl style={{border: '1px solid white', width:"fit-content"}}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          value={fontChose}
          autoWidth
          onChange={handleChange}
          style={{color:"white"}}
          renderValue={(selected) => {
              return <em>{selected}</em>;
          }}
        >
          {
            fontArray.map((item,index)=>{
              return(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>  
      }

    </Box> */}
    <Section/>
    <AboutSection/>
    <LendingSection/>
    <ActionSection/>
    <JoinSection/>

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
