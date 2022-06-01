import { Box,Typography } from '@mui/material';
import Image from 'next/image';

export const JoinSection = (props) => {

    return (
        <section style={{width: "100%",display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop: "var(--main-section-interval)"}}>
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
                    <p className="innerParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Box>

                <Box sx={{display:'flex',justifyContent:{xs:"center",md:"flex-start"}}}>
                    <button className="joinButton">
                        Join Our Discord
                        <span className="joinButtonArrow">
                            ➔
                        </span>
                    </button>
                </Box>
            </Box>
        </Box>
        </section>
    )
}
