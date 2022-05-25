import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const Section = (props) => {
    return(
        <section style={{width: "100%",display:'flex',justifyContent:'center'}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",minHeight: "800px"}}>
            <Box sx={{width:"50%"}}>
                <Box>
                <h5 className="secondaryHeader">GET LIQUIDITY WITH NFT</h5>
                </Box>

                <Box>
                    <h1 className="mainHeader">The best DAO-enabled NFT loan platform</h1>
                </Box>

                <Box sx={{pt:'40px'}}>
                </Box>

                <Box>
                    <button className="actionButton">Apply for a Loan Now</button>
                </Box>

                <Box sx={{pt:"120px"}}>
                    <Box sx={{display:'flex'}}>
                        <div style={{display:'flex',alignItems:'center'}} className="firstStat">
                            <h2 className="statNumber">
                                1k+
                            </h2>
                            <h5 className="statWords">
                                Loan Approved
                            </h5>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}} >
                        <h2 className="statNumber">
                                $20k+
                            </h2>
                            <h5 className="statWords">
                                {"Raised"}
                            </h5>
                        </div>
                    </Box>
                </Box>

            </Box>
            <Box sx={{width:"50%"}}>
                <Box sx={{mt:'5%'}}>
                <Image src="/static/images/Goblin.png" height="770" width="941"/>
                </Box>

            </Box>
        </Box>
    </section>
    )


}

