import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const AboutSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
        <a id="about_us" className="anchorForLink"></a>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:{xs:"0px",md:"100px"},flexDirection:{xs:"column-reverse",md:"row"},alignItems:{xs:"flex-start",md:"center"}}}>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{transform: {xs:"scale(0.9)",md:'none'},display:'flex',justifyContent:{xs:'center',md:'flex-start'}}}>
                    <Image src="/static/images/pepes/Business.png" height="450" width="450"/>
                </Box>
            </Box>
            <Box sx={{width:{xs:"100%",md:"50%"},mb:{xs:"30px",md:"0"}}}>
                <Box sx={{pb:'15px'}}>
                    <h2 className="secondaryHeader">About <span className="secondaryHeader secondaryHeaderSpecial">US </span></h2>
                </Box>

                <Box sx={{pb:'20px'}}>
                    <h1 className="innerMainHeader">NFT Financialization Collective</h1>
                </Box>

                <Box>
                    <p className="innerParagraph">{"Goblin Sax is an NFT financialization collective focused on the NFT lending space. We formed in December 2021, pooling 205 ETH from 29 capital contributors. Our objective was to make loans. By May we had made over 150 loans for a profit of >20 ETH and ROI of ~30%. Our vision is to become the largest NFT loan originator."}
                    <br/><br/>
                    We are NFT enthusiasts, data scientists, engineers and project managers. We are the people that will make NFT financialization a reality. If you are passionate about the space, we would like to work with you.</p>
                </Box>

            </Box>
        </Box>
        </section>
    )
}
