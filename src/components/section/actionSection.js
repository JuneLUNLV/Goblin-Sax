import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const ActionSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:"100px"}}>
        <Box className="actionBanner" sx={{maxWidth:'1200px',display:'flex',width:"100%",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}}}>
            <Box sx={{width:{xs:"100%",md:"60%"}}}>
                <Box sx={{mb:'20px'}}>
                    <h1 className="actionBannerHeader">
                        Seeking <span style={{color:"var(--main-color)"}}>liquidity</span> on your blue chip NFTs? 
                    </h1>
                </Box>

                <Box>
                    <p className="actionBannerParagraph">
                        Discover the true value of your NFTs
                    </p>
                </Box>      
            </Box>

            <Box sx={{display:'flex',width:{xs:"100%",md:"40%"},alignItems: "center",justifyContent: {xs:"center",md:"flex-end"}}}>
                <button className="actionButton">
                    Request a Loan
                </button>
            </Box>

        </Box>
        </section>
    )
}