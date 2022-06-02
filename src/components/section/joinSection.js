import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const JoinSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
        <a id="contact_us" className="anchorForLink"></a>
        <Box sx={{maxWidth:'1200px',display:'flex',width:"100%",py:{xs:"0px",md:"100px"},flexDirection:{xs:"column-reverse",md:"row"},alignItems:{xs:"center",md:"flex-start"}}}>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{transform: {xs:"scale(0.9)",md:'none'},display:'flex',justifyContent:'center'}}>
                    <Image src="/static/images/pepes/Wave.png" height="450" width="450"/>
                </Box>
            </Box>
            <Box sx={{width:{xs:"100%",md:"50%"}}}>
                <Box sx={{pb:'15px'}}>
                    <h2 className="secondaryHeader">JOIN THE <h2 className="secondaryHeader secondaryHeaderSpecial">DAO </h2></h2>
                </Box>

                <Box sx={{pb:'20px'}}>
                    <h1 className="innerMainHeader">Become a Goblin Contributor</h1>
                </Box>

                <Box>
                    <p className="innerParagraph">Goblin Sax is a collective of goblins who want to push the boundaries of NFTs as an asset class. As the NFT sector grows and achieves greater adoption, we are excited by the financialization primitives and use cases that can be built on top of it.<br/><br/>
                    To turn this dream into reality, we have gathered a collective of NFT enthusiasts, data scientists, engineers and project managers. Navigating the intersection of intersection between DeFi and NFTs is our bread and butter.<br/><br/>
                    If this excites you, you may be the Goblin we are looking for. Say gm in our Discord and we can’t wait to welcome you to Goblin Sax!</p>
                </Box>

                <Box sx={{display:'flex',justifyContent:{xs:"center",md:"flex-start"}}}>
                <a target="_blank" href="https://discord.gg/GS6rvrvb9B" rel="noopener noreferrer">
                    <button className="joinButton">
                        Join Our Discord
                        <span className="joinButtonArrow">
                            ➔
                        </span>
                    </button>
                </a>

                </Box>
            </Box>
        </Box>
        </section>
    )
}
