import { Box } from '@mui/material';
import Image from 'next/image';

export const Section = (props) => {
    return(
    <>
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <Box sx={{flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},maxWidth:'1200px',display:'flex',width:"100%",minHeight: "800px",paddingBottom:"100px"}}>
            <Box sx={{width:{xs:"100%",md:"50%"},mb:{xs:"30px",md:"0"}}}>
                <Box>
                <h2 className="secondaryHeader">WHERE <span className="secondaryHeader secondaryHeaderSpecial">NFT</span> MEETS DEFI</h2>
                </Box>

                <Box sx={{pt:'20px'}}>
                </Box>

                <Box>
                    <h1 className="mainHeader">The NFT Financialization DAO</h1>
                </Box>

                <Box sx={{pt:'40px'}}>
                </Box>

                <Box sx={{display:'flex',justifyContent:{xs:"center",md:"flex-start"}}}>
                    <a target="_blank" href="https://forms.gle/fsn85QLCNH7TGyBb9" rel="noopener noreferrer">
                        <button className="actionButton">Apply for a Loan Now</button>
                    </a>
                </Box>

                <Box sx={{pt:{xs:"40px",md:"120px"}}}>
                    <Box sx={{display:'flex',flexDirection:{xs:"column",md:"row"},alignItems:{xs:'center',md:"flex-start"}}}>
                        <div style={{display:'flex',alignItems:'center'}} className="firstStat">
                            <h2 className="statNumber">
                                200+
                            </h2>
                            <h2 className="statWords" style={{ marginRight:"40px"}}>
                                ETH LENT
                            </h2>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}} >
                        <h2 className="statNumber">
                                $1.5M+
                            </h2>
                            <h2 className="statWords">
                                {"Raised"}
                            </h2>
                        </div>
                    </Box>
                </Box>

            </Box>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{display:'flex', justifyContent: 'center'}}>
                {/* <Image src="/static/images/Goblin.png" height="770" width="941"/> */}
                <Image src="/static/images/pepes/Well memed2.png" height="600" width="600"/>
                {/* <Image src="/static/images/Goblin2.png" height="366" width="402"/> */}
                </Box>
            </Box>
        </Box>
        <Box sx={{width:"100%", borderTop:"1px solid #DDDEE178",maxWidth:'1200px'}}/>    
    </section>
    </>
    )


}

