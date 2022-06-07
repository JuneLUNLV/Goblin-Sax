import { Box } from '@mui/material';
import Image from 'next/image';
import {useState,useEffect} from 'react';


export const LendingSection = (props) => {
    const [stepBoxState, setStepBoxState] = useState(0);
    useEffect(()=>{
        const intervalHandler = setInterval(()=>{
            setStepBoxState(stepBoxState => (Number(stepBoxState) + 1)%3);
        },5000)
        return () => clearInterval(intervalHandler);
    },[])
    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
        <a id="nft_lending" className="anchorForLink"></a>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:"100px",py:{xs:"50px",md:"100px"},flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}}}>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{pb:'15px'}}>
                        <h2 className="secondaryHeader">NFT <span className="secondaryHeader secondaryHeaderSpecial">LENDING </span></h2>
                    </Box>

                    <Box sx={{pb:'20px'}}>
                        <h1 className="innerMainHeader">We Make Loans on your NFTs.</h1>
                    </Box>

                    <Box>
                        <Box className={`stepBox ${stepBoxState == 0 ? "stepBoxActive" : void(0)}`} onClick={(e)=>{setStepBoxState(0)}}>
                            <Box sx={{display:'flex',alignItems:'center'}}>
                                <Box sx={{width:'10%',display:{xs:'none',md:'block'}}}>
                                    <h1 className="stepNumber">
                                        1
                                    </h1>
                                </Box>

                                <Box>
                                    <h1 className="stepHeader">
                                        Send us a Loan Request
                                    </h1>
                                    <h2 className="stepParagraph">
                                        Apply through our loan request form or via NFTfi.
                                    </h2>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={`stepBox ${stepBoxState == 1 ? "stepBoxActive" : void(1)}`} onClick={(e)=>{setStepBoxState(1)}}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                                <Box sx={{width:'10%',display:{xs:'none',md:'block'}}}>
                                    <h1 className="stepNumber">
                                        2
                                    </h1>
                                </Box>

                                <Box>
                                    <h1 className="stepHeader">
                                        We assess your request
                                    </h1>
                                    <h2 className="stepParagraph">
                                        We will assess your assets for a fair valuation & loan terms.
                                    </h2>
                                </Box>
                            </Box>
                        </Box>

                        <Box className={`stepBox ${stepBoxState == 2 ? "stepBoxActive" : void(2)}`} onClick={(e)=>{setStepBoxState(2)}}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                                <Box sx={{width:'10%',display:{xs:'none',md:'block'}}}>
                                    <h1 className="stepNumber">
                                        3
                                    </h1>
                                </Box>

                                <Box>
                                    <h1 className="stepHeader">
                                        We offer & disburse your loan
                                    </h1>
                                    <h2 className="stepParagraph">
                                        Within 12 hours, we will offer a loan and can disburse funds immediately.
                                    </h2>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            </Box>
            <Box sx={{width:{xs:"100%",md:"50%"},"display":"flex","justifyContent":"flex-end","alignItems":"center","alignContent":"center",display:{xs:'none',md:'block'}}}>
                <Box sx={{
                    marginTop: `${stepBoxState == 0 ? "140px" : "0px"}`,
                    display:'flex',
                    "justifyContent":"flex-end",
                    "alignItems":"center",
                    "alignContent":"center"

                }}>
                    {stepBoxState == 0 ? <Image src="/static/images/pepes/Happy keyboard.png" height="450" width="450"/> : void(0)}
                    {stepBoxState == 1 ? <Image src="/static/images/pepes/Loupe.png" height="450" width="450"/> : void(0)}
                    {stepBoxState == 2 ? <Image src="/static/images/pepes/Money rain.png" height="450" width="450"/> : void(0)}                
                </Box>
            </Box>
        </Box>
        </section>
    )
}
