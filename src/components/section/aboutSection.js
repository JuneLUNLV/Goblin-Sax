import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const AboutSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:"100px"}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:"100px"}}>
            <Box sx={{width:"50%"}}>
            </Box>
            <Box sx={{width:"50%"}}>
                <Box sx={{pb:'15px'}}>
                    <h5 className="secondaryHeader">About <h5 className="secondaryHeader secondaryHeaderSpecial">US </h5></h5>
                </Box>

                <Box sx={{pb:'20px'}}>
                    <h1 className="innerMainHeader">NFT Financialization Collective</h1>
                </Box>

                <Box>
                    <p className="innerParagraph">We are a collective that believes in the future of NFT financialization. As the NFT sector matures, we envision more financialization use cases coming to NFTs, regardless whether it is lending, perpetual futures or options. Currently, we are focused on unlocking NFT liquidity and have provided XX+ ETH in NFT-collateralized loans. We are NFT enthusiasts, data scientists, engineers and project managers. We are the people that will make NFT financialization a reality. If you are passionate about the space, we would like to work with you</p>
                </Box>

            </Box>
        </Box>
        </section>
    )
}