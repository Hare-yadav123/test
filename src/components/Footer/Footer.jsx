import React , {useEffect,useState} from 'react';
import {
    Box,
    Typography,
    Link,
    Grid,
    IconButton
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";

export const Footer = () => {
  return (

    <Box sx={{ width: "100%", bgcolor: "#111", px:{xs:1,sm:1,md:0} }}>

        {/* HEADERS */}
        <Box sx={{ maxWidth: "1200px", mx: "auto",px: { xs: 2, sm: 4 }, pt: 5 }}>
            <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                color:"#fff",
                gap: 4,
                fontWeight:600,
                fontSize:"24px",
                textOverflow:"ellipsis",
                textTransform:"uppercase"
            }}
            >
            <Typography>dream homes</Typography>
            <Typography>our partner</Typography>
            <Typography>company</Typography>
            <Typography>our contact</Typography>
            
            </Box>
        </Box>

        {/* FULL WIDTH DIVIDER */}
        <Divider sx={{ bgcolor: "gray", my: 2 }} />

        {/* CONTENT */}
        <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 4 }, pb: 5 }}>
            <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                cursor:'pointer',
            }}
            >
            <Box sx=
            {{
                color:"rgba(255,255,255,0.7)",
                "& a":{
                    fontWeight:500,
                    fontSize:12,
                    textOverflow:"ellipsis",
                    borderRadius:"4px"
                },
                "& .MuiLink-root":{
                    color:"inherit",
                    textDecoration:"none",
                },
                "&:hover":{
                    color:"#fff"
                }
            }}>
                <Link>Buy home</Link><br />
                <Link>Buy flats</Link><br />
                <Link>Buy plots</Link><br />
                <Link>On rent</Link><br />
                <Link>Dream Homes</Link><br />
                <Link>ABC Builders</Link>
                <Link>Dream Homes</Link><br />
                <Link>ABC Builders</Link>
                <Link>Dream Homes</Link><br />
                <Link>ABC Builders</Link>
            </Box>

            <Box sx=
            {{
                 color:"rgba(255,255,255,0.7)",
                 "& a":{
                    fontWeight:500,
                    fontSize:12,
                    textOverflow:"ellipsis",
                    borderRadius:"4px"
                },
                "& .MuiLink-root":{
                    color:"inherit",
                    textDecoration:"none"
                },
                "&:hover":{
                    color:"#fff"
                }
            }}>
                <Link>New project</Link><br />
                <Link>Ready for sale</Link>
                <Link>New project</Link><br />
                <Link>Ongoing project</Link><br />
                <Link>Ready for sale</Link>
                <Link>Dream Homes</Link><br />
                <Link>ABC Builders</Link>
                <Link>Dream Homes</Link><br />
                <Link>ABC Builders</Link>
                <Link>Dream Homes</Link><br />
                <Link>ABC Builders</Link>
            </Box>

            <Box 
            sx={{
                color:"rgba(255,255,255,0.7)",
                "& a":{
                    fontWeight:500,
                    fontSize:12,
                    textOverflow:"ellipsis",
                    borderRadius:"4px"
                },
                "& .MuiLink-root":{
                    color:"inherit",
                    textDecoration:"none"
                },
                "&:hover":{
                    color:"#fff"
                }
            }}
            >
                <Link>About us</Link><br />
                <Link>Contact with us</Link><br />
                <Link>Career with us</Link><br />
                <Link>Request info</Link><br />
                <Link>Terms & Condition</Link><br />
                <Link>Feedback</Link> <br />
                <Link>Privacy Policy</Link><br />
                <Link>Report a problem</Link>
            </Box>

            <Box
            sx={{
                color:"rgba(255,255,255,0.8)",
                textOverflow:"ellipsis",
                borderRadius:"4px"
            
            }}
            >
                <Typography sx={{fontWeight:300,fontSize:"15px"}}>
                Address : 201, Dream Plaza,MG Road, Pune Maharastra India
                </Typography>
                <Typography sx={{fontWeight:300,fontSize:"15px"}}>Email : dreamhomes@gmail.com</Typography>
                <Typography
                sx={{
                    mt:1,
                    fontWeight:300,
                    fontSize:"20px",
                }}
                >contact with us</Typography>
                <IconButton
                sx={{
                    gap:2,
                    color:"rgba(255,255,255,1)",
                }}
                >
                    <FacebookIcon />
                    <YouTubIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </IconButton> <br />

                <Typography sx={{fontWeight:300,fontSize:"15px"}}>© 2026 Associative.in </Typography>  
                <Typography sx={{fontWeight:300,fontSize:"15px"}}>DreamHome is an Associative.in application.</Typography>
                <Typography sx={{fontWeight:300,fontSize:"15px"}}>All trademarks are the property belong to their respective owners.</Typography>
            </Box>
            </Box>
        </Box>
    </Box>      
  )
}
export default Footer;