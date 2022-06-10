import { Box } from '@mui/material';
import Image from 'next/image';
import {useState,useEffect} from 'react';

const podcastHeader = ['Episode 1', 'Episode 2','Episode 3','Episode 4','Episode 5']
const podcastTitle = ['Introducing the Goblin Hideout', 'Episode 2 Title','Episode 3 Title','Episode 4 Title','Episode 5 Title']
const podcastEle = (<iframe src="https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>)

export const PodcastSectionTwo = (props) => {
    const [podCastPageState, setPodCastPageState] = useState(0);
    console.log(podcastEle);
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
                                        {`${podcastHeader[podCastPageState]}`}
                                    </h1>
                                </Box>

                                <Box sx={{mt:'15px'}}>
                                    <h1 className="stepHeader">
                                    {`${podcastTitle[podCastPageState]}`}
                                    </h1>
                                </Box>   
                                    <Box sx={{width: {xs:"100%",md:'100%'},mt:"30px"}}>
                                    {podCastPageState == 0 ? <iframe src="https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> : <Box sx={{
                                        height:'152px',
                                        width: '100%'
                                    }}/>}
                                    </Box>
                                    <Box className="slickDots">
                                        <Box className={`${podCastPageState == 0 ? "slickDotActive" : "slickDotPresent"}`} onClick={()=>setPodCastPageState(0)}/>
                                        <Box className={`${podCastPageState == 1 ? "slickDotActive" : "slickDotPresent"}`} onClick={()=>setPodCastPageState(1)}/>
                                        <Box className={`${podCastPageState == 2 ? "slickDotActive" : "slickDotPresent"}`} onClick={()=>setPodCastPageState(2)}/>
                                        <Box className={`${podCastPageState == 3 ? "slickDotActive" : "slickDotPresent"}`} onClick={()=>setPodCastPageState(3)}/>
                                        <Box className={`${podCastPageState == 4 ? "slickDotActive" : "slickDotPresent"}`} onClick={()=>setPodCastPageState(4)}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
            </Box>
        </section>
    )
}
