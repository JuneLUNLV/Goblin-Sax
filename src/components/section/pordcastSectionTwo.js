import { Box } from '@mui/material';
import Image from 'next/image';
import {useState,useEffect, useMemo} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const podcastHeader = ['Episode 1', 'Episode 2','Episode 3','Episode 4','Episode 5']
const podcastTitle = ['Introducing the Goblin Hideout', 'Episode 2 Title','Episode 3 Title','Episode 4 Title','Episode 5 Title']
const podcastSrc = ["https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0",
                    "https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0",
                    "https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0",
                    "https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0",
                    "https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0"]

export const PodcastSectionTwo = (props) => {
    const [podCastPageState, setPodCastPageState] = useState(0);
    const [swiper, setSwiper] = useState();
    const onSlideChange = ()=>{
        setPodCastPageState(swiper.activeIndex)
    }
    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
        <a id="podcast" className="anchorForLink"></a>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:{xs:"50px",md:"100px"},flexDirection:{xs:"column-reverse",md:"row"},alignItems:{xs:"flex-start",md:"center"}}}>
            <Box sx={{width:{xs:"100%",md:"50%"},"display":"flex","justifyContent":"flex-start","alignItems":"center","alignContent":"center",}}>
                <Box sx={{transform: {xs:"scale(0.9)",md:'none'},display:'flex',justifyContent:{xs:'center',md:'flex-start'}}}>
                    <Image src="/static/images/pepes/Jam.png" height="450" width="450"/>
                </Box>
                </Box>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{pb:'15px'}}>
                        <h2 className="secondaryHeader">TUNE IN TO OUR <span className="secondaryHeader secondaryHeaderSpecial"> PODCAST</span></h2>
                    </Box>

                    <Box sx={{pb:'0px'}}>
                        <h1 className="innerMainHeader">Learn More About Goblin Sax</h1>
                    </Box>
                        <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={() => onSlideChange()}
                        >
                        {podcastHeader.map((item,index)=>{
                            return(
                            <SwiperSlide key={index}>
                            <Box className="podcastBox">
                                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',width:"95%"}}>
                                    <Box sx={{width:'100%'}}>
                                        <h1 className="podcastBoxNumber" style={{fontSize:'25px'}}>
                                            {`${podcastHeader[index]}`}
                                        </h1>
                                    </Box>

                                    <Box sx={{mt:'15px'}}>
                                        <h1 className="stepHeader" style={{fontSize:'22px'}}>
                                        {`${podcastTitle[index]}`}
                                        </h1>
                                    </Box>   
                                        <Box sx={{width: {xs:"100%",md:'100%'},mt:"30px"}}>
                                        {index == 0 ? <iframe src="https://open.spotify.com/embed/episode/2RULVxhnv54T9cfSxNo61z?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> : <Box sx={{
                                        height:'152px',
                                        width: '100%'
                                        }}/>}
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                            )
                        })}

                        </Swiper>
                        <Box className="slickDots">
                            {
                                podcastHeader.map((item,index)=>{
                                    return(
                                        <Box key={index} className={`${podCastPageState == index ? "slickDotActive" : "slickDotPresent"}`} onClick={()=>swiper.slideTo(index)}/>
                                    )
                                })
                            }
                        </Box>
                    </Box>
            </Box>
        </section>
    )
}
