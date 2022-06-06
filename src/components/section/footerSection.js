import { Box,Typography } from '@mui/material';
import Image from 'next/image';


const socials = ["Twitter","Discord","Medium"]
const socials2 = ["Dashboard", "Github", "Forum"]
const links = ["https://twitter.com/goblinsax","https://discord.gg/GS6rvrvb9B","https://medium.com/@goblinsax"]
const links2 = ["https://dash.goblinsax.xyz/","https://github.com/GoblinSax","https://gov.goblinsax.com/"]
export const FooterSection = (props) => {

    return (
        <section className="footerBackground" style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:{xs:"0px",md:"100px"}}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%","position":"relative","zIndex":"2","paddingTop":"2rem","paddingBottom":"0.5rem",my:'3rem',justifyContent:'center', paddingLeft:{xs:'16px',sm:'24px'},
        paddingRight:{xs:'16px',sm:'24px'},flexDirection:{xs:"column",md:"row"}}}>

            <Box sx={{width:{xs:"100%",md:"40%"}}}>
                <Box sx={{mb:'0.5rem'}}>
                    <h1 style={{"fontWeight":"normal","fontSize":"30px","lineHeight":"41px","letterSpacing":"-0.021em",color:'white',marginBottom:"20px",fontFamily:"var(--main-header-font)"}}>
                        Goblin Sax
                    </h1>
                </Box>

                <Box sx={{mb:'0.5rem'}}>
                    <p style={{"fontSize":"15px","lineHeight":"1.5","letterSpacing":"-0.009em",color:'white',fontFamily:"var(--main-font)"}}>
                         Goblin Sax is an NFT financialization collective and we currently make NFT-collateralized loans to NFT holders.
                    </p>
                </Box>
            </Box>

            <Box sx={{width:{xs:"100%",md:"40%"},ml:{xs:"0%",md:'10%'}}}>
                <Box >
                    <p className="footerSocial">
                    
                    </p>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',width:'50%'}}>
                    <Box>
                        {
                            socials.map((v,i)=>{
                                return(
                                    <Box key={v} sx={{mb:'10px'}}>
                                        <a className="footerSocialLink" href={links[i]} target="_blank" rel="noopener noreferrer">
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
                                        <a className="footerSocialLink" href={links2[i]} target="_blank" rel="noopener noreferrer">
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