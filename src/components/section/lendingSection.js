import { Box,Typography } from '@mui/material';
import Image from 'next/image';
import {useState} from 'react'

export const LendingSection = (props) => {
    const [stepBoxState, setStepBoxState] = useState(0);
    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:"100px"}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:"100px"}}>
            <Box sx={{width:"50%"}}>
                <Box sx={{pb:'15px'}}>
                        <h2 className="secondaryHeader">NFT <h2 className="secondaryHeader secondaryHeaderSpecial">LENDING </h2></h2>
                    </Box>

                    <Box sx={{pb:'20px'}}>
                        <h1 className="innerMainHeader">We Make Loans on your NFTs</h1>
                    </Box>

                    <Box>
                        <Box className={`stepBox ${stepBoxState == 0 ? "stepBoxActive" : void(0)}`} onClick={(e)=>{setStepBoxState(0)}}>
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
                                    <h2 className="stepParagraph">
                                        Send your loan request via NFTfi or our loan request form
                                    </h2>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={`stepBox ${stepBoxState == 1 ? "stepBoxActive" : void(1)}`} onClick={(e)=>{setStepBoxState(1)}}>
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
                                    <h2 className="stepParagraph">
                                        We will assess your assets for a fair valuation & loan terms
                                    </h2>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={`stepBox ${stepBoxState == 2 ? "stepBoxActive" : void(2)}`} onClick={(e)=>{setStepBoxState(2)}}>
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
                                    <h2 className="stepParagraph">
                                        Within 48 hours, we will offer a loan and can disburse funds immediately.
                                    </h2>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            </Box>
            <Box sx={{width:"50%","display":"flex","justifyContent":"flex-end","alignItems":"center","alignContent":"center"}}>
                <Box sx={{}}>
                    {stepBoxState == 0 ? <Image src="/static/images/pepes/PepeOk.png" height="450" width="450"/> : void(0)}
                    {stepBoxState == 1 ? <Image src="/static/images/pepes/Loupe.png" height="450" width="450"/> : void(0)}
                    {stepBoxState == 2 ? <Image src="/static/images/pepes/Money rain.png" height="450" width="450"/> : void(0)}                
                </Box>
            </Box>
        </Box>
        </section>
    )
}
