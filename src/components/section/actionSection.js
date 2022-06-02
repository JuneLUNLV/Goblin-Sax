import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const ActionSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <a id="request_a_loan" className="anchorForLink"></a>
        <Box className="actionBanner" sx={{maxWidth:'1200px',display:'flex',width:"100%",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},marginTop:{xs:"0px",md:"var(--main-section-interval)"}}}>
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
            <a target="_blank" href="https://forms.gle/fsn85QLCNH7TGyBb9" rel="noopener noreferrer">
                <button className="actionButton">
                    Request a Loan
                </button>
            </a>

            </Box>

        </Box>
        </section>
    )
}