import { Box } from '@mui/material';
import Image from 'next/image';
import {useState,useEffect} from 'react';


export const PodcastSection = (props) => {
    const [stepBoxState, setStepBoxState] = useState(0);
    useEffect(()=>{
        // const intervalHandler = setInterval(()=>{
        //     setStepBoxState(stepBoxState => (Number(stepBoxState) + 1)%3);
        // },5000)
        // return () => clearInterval(intervalHandler);
    },[])
    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
        <a id="nft_lending" className="anchorForLink"></a>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:"100px",py:{xs:"50px",md:"100px"},flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"}}}>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{pb:'15px'}}>
                        <h2 className="secondaryHeader">TUNE IN TO OUR <span className="secondaryHeader secondaryHeaderSpecial"> PODCAST</span></h2>
                    </Box>

                    <Box sx={{pb:'20px'}}>
                        <h1 className="innerMainHeader">Learn More About Goblin Sax</h1>
                    </Box>

                    <Box sx={{pb:'20px'}}>
                        <h2 className="innerParagraph">{"The Goblin Hideout is the first podcast focused solely on the emerging sector of NFT finance."}</h2>
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
                                        Introducing the Goblin Hideout
                                    </h1>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            </Box>
            <Box sx={{width:{xs:"100%",md:"50%"},"display":"flex","justifyContent":"flex-end","alignItems":"center","alignContent":"center",}}>
                <Box sx={{
                    display:'flex',
                    "justifyContent":"flex-end",
                    "alignItems":"center",
                    "alignContent":"center",
                    width:'100%',
                    marginTop:{md:'0px',xs:'30px'}
                }}>
                    {stepBoxState == 0 ? 
                        <Box sx={{width: {xs:"100%",md:'80%'}}}>
                        <iframe src="https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </Box>
                     : void(0)}           
                </Box>
            </Box>
        </Box>
        </section>
    )
}
