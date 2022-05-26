import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const ActionSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:"100px"}}>
        <Box className="actionBanner" sx={{maxWidth:'1200px',display:'flex',width:"100%"}}>
            <Box sx={{width:'70%'}}>
                <Box sx={{mb:'20px'}}>
                    <h1 className="actionBannerHeader">
                        Seeking liquidity on your blue chip NFTs? 
                    </h1>
                </Box>

                <Box>
                    <p className="actionBannerParagraph">
                        Discover the value of your NFTs
                    </p>
                </Box>      
            </Box>

            <Box sx={{display:'flex',width:"30%",alignItems: "center",justifyContent: "flex-end"}}>
                <button className="actionBannerButton">
                    Request a Loan
                </button>
            </Box>

        </Box>
        </section>
    )
}