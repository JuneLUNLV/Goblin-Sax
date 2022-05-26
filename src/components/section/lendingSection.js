import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const LendingSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:"100px"}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:"100px"}}>
            <Box sx={{width:"50%"}}>
                <Box sx={{pb:'15px'}}>
                        <h5 className="secondaryHeader">NFT <h5 className="secondaryHeader secondaryHeaderSpecial">LENDING </h5></h5>
                    </Box>

                    <Box sx={{pb:'20px'}}>
                        <h1 className="innerMainHeader">We Make Loans on your NFTs</h1>
                    </Box>

                    <Box>
                        <Box className="stepBox">
                            <Box sx={{display:'flex',alignItems:'center'}}>
                                <Box sx={{width:'10%'}}>
                                    <h1 className="stepNumber">
                                        1
                                    </h1>
                                </Box>

                                <Box>
                                    <h1 className="stepHeader">
                                        Send us a Loan Request
                                    </h1>
                                    <h5 className="stepParagraph">
                                        Send your loan request via NFTfi or our loan request form
                                    </h5>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="stepBox">
                        <Box sx={{display:'flex',alignItems:'center'}}>
                                <Box sx={{width:'10%'}}>
                                    <h1 className="stepNumber">
                                        2
                                    </h1>
                                </Box>

                                <Box>
                                    <h1 className="stepHeader">
                                        We assess your request
                                    </h1>
                                    <h5 className="stepParagraph">
                                        We will assess your assets for a fair valuation & loan terms
                                    </h5>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="stepBox">
                        <Box sx={{display:'flex',alignItems:'center'}}>
                                <Box sx={{width:'10%'}}>
                                    <h1 className="stepNumber">
                                        3
                                    </h1>
                                </Box>

                                <Box>
                                    <h1 className="stepHeader">
                                        Offer & disburse loans
                                    </h1>
                                    <h5 className="stepParagraph">
                                        Within 48 hours, we will offer a loan and can disburse funds immediately.
                                    </h5>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            </Box>
            <Box sx={{width:"50%"}}>


            </Box>
        </Box>
        </section>
    )
}
