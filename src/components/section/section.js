import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const Section = (props) => {
    return(
    <>
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",minHeight: "800px",alignItems: "flex-end",paddingBottom:"100px"}}>
            <Box sx={{width:"50%"}}>
                <Box>
                <h2 className="secondaryHeader">WHERE NFT <span className="secondaryHeader secondaryHeaderSpecial">NFT</span> MEETS <span className="secondaryHeader secondaryHeaderSpecial">DEFI</span></h2>
                </Box>

                <Box sx={{pt:'20px'}}>
                </Box>

                <Box>
                    <h1 className="mainHeader">The NFT Financialization DAO</h1>
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
                                100+
                            </h2>
                            <h2 className="statWords" style={{ marginRight:"40px"}}>
                                ETH LENT
                            </h2>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}} >
                        <h2 className="statNumber">
                                $1M+
                            </h2>
                            <h2 className="statWords">
                                {"Raised"}
                            </h2>
                        </div>
                    </Box>
                </Box>

            </Box>
            <Box sx={{width:"50%"}}>
                <Box sx={{display:'flex'}}>
                {/* <Image src="/static/images/Goblin.png" height="770" width="941"/> */}
                <Image src="/static/images/pepes/Well memed2.png" height="600" width="600"/>
                {/* <Image src="/static/images/Goblin2.png" height="366" width="402"/> */}
                </Box>
            </Box>
        </Box>
        <Box sx={{width:"100%", borderTop:"1px solid #DDDEE178",maxWidth:'1200px'}}>
        
        </Box>
    </section>
    </>
    )


}

