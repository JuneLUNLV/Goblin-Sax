import { Box } from '@mui/material';
import Image from 'next/image';
import {useState,useEffect} from 'react';



export const PodcastSectionTwo = (props) => {
    const [podCastPageState, setPodCastPageState] = useState(0);
    useEffect(()=>{

    },[])
    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
        <a id="nft_lending" className="anchorForLink"></a>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:{xs:"50px",md:"100px"},flexDirection:{xs:"column-reverse",md:"row"},alignItems:{xs:"flex-start",md:"center"}}}>
            <Box sx={{width:{xs:"100%",md:"50%"},"display":"flex","justifyContent":"flex-start","alignItems":"center","alignContent":"center",}}>
                <Box sx={{transform: {xs:"scale(0.9)",md:'none'},display:'flex',justifyContent:{xs:'center',md:'flex-start'}}}>
                    <Image src="/static/images/pepes/Jam.png" height="450" width="450"/>
                </Box>
                </Box>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{pb:'15px'}}>
                        <h2 className="secondaryHeader">🎧 TUNE IN TO OUR <span className="secondaryHeader secondaryHeaderSpecial"> PODCAST</span></h2>
                    </Box>

                    <Box sx={{pb:'0px'}}>
                        <h1 className="innerMainHeader">Learn More About Goblin Sax</h1>
                    </Box>

                    {/* <Box sx={{pb:'0px'}}>
                        <h2 className="innerParagraph">{"The Goblin Hideout is the first podcast focused solely on the emerging sector of NFT finance."}</h2>
                    </Box> */}

                    <Box sx={{position:'relative'}}>
                        {/* <Box className="podcastBoxAction2">
                            {`<`}
                        </Box>
                        <Box className="podcastBoxAction1">
                            {">"}
                        </Box> */}
                        <Box className="podcastBox">
                            <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',width:"95%"}}>
                                <Box sx={{width:'100%'}}>
                                    <h1 className="podcastBoxNumber">
                                        Episode 1
                                    </h1>
                                </Box>

                                <Box sx={{mt:'15px'}}>
                                    <h1 className="stepHeader">
                                        Introducing the Goblin Hideout
                                    </h1>
                                </Box>

                                {podCastPageState == 0 ? 
                                    <Box sx={{width: {xs:"100%",md:'100%'},mt:"30px"}}>
                                    <iframe src="https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                    </Box>
                                : void(0)} 
                                <Box className="slickDots">
                                    <Box className="slickDotActive"/>
                                    <Box className="slickDotPresent"/>
                                    <Box className="slickDotPresent"/>
                                    <Box className="slickDotPresent"/>
                                    <Box className="slickDotPresent"/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            </Box>
        </Box>
        </section>
    )
}
