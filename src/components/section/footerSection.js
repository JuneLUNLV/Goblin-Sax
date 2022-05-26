import { Box,Typography } from '@mui/material';
import Image from 'next/image';


const socials = ["Twitter","Discord","Medium"]
const socials2 = ["Docs", "Github", "Forum"]
export const FooterSection = (props) => {

    return (
        <section className="footerBackground" style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:"100px"}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%","position":"relative","zIndex":"2","paddingTop":"2rem","paddingBottom":"0.5rem",my:'3rem',justifyContent:'center'}}>

            <Box sx={{width:"40%"}}>
                <Box sx={{mb:'0.5rem'}}>
                    <h1 style={{"fontWeight":"bold","fontSize":"30px","lineHeight":"41px","letterSpacing":"-0.021em",color:'white',marginBottom:"20px"}}>
                        Goblin Sax
                    </h1>
                </Box>

                <Box sx={{mb:'0.5rem'}}>
                    <p style={{"fontSize":"15px","lineHeight":"1.5","letterSpacing":"-0.009em",color:'white'}}>
                        Goblin Sax is an NFT financialization collective currently focused on the NFT lending space. 
                    </p>
                </Box>
            </Box>

            <Box sx={{width:"40%",ml:'10%'}}>
                <Box >
                    <p className="footerSocial">
                        social
                    </p>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',width:'50%'}}>
                    <Box>
                        {
                            socials.map((v,i)=>{
                                return(
                                    <Box key={v} sx={{mb:'10px'}}>
                                        <a className="footerSocialLink">
                                            {v}
                                        </a>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    <Box>
                        {
                            socials2.map((v,i)=>{
                                return(
                                    <Box key={v} sx={{mb:'10px'}}>
                                        <a className="footerSocialLink">
                                            {v}
                                        </a>
                                    </Box>
                                )
                            })
                        }
                    </Box>                   
                </Box>





            </Box>

            <Box>
            </Box>
        </Box>
        </section>
    )
}