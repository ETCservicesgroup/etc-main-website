import { Box, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { theme } from "..";


//@ts-ignore
function Footer(props) {
  const styles = {
    footerContainer: {
      height: '200px',
      backgroundColor: '#06283D',
      paddingTop: '21px',
      paddingBottom: '18px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [theme.breakpoints.up('md')]: {
        paddingTop: '25px',
        paddingBottom: '23px',
        height: '223px',
      },
    },
    footerText: {
      textAlign: 'center',
      fontSize: '10px',
      color: '#DFF6FF',
      fontWeight: 400,
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
    },
    footerLinksAndLogoContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    footerLogoContainer: {
      textAlign: 'center',
      color: '#DFF6FF',
    },
    footerLinksContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerIconsContainer: {
      color: '#DFF6FF',
      marginTop: '10px',
    },
    footerLinks: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#DFF6FF',
      paddingBottom: '10px',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
    },
    contactEmailText: {
      fontSize: '12px',
      color: '#DFF6FF',
      fontWeight: 500,
      verticalAlign: 'top',
      paddingLeft: '8px',
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
    },
    emailIcon: {
      color: '#DFF6FF',
      fontSize: '20px',
      verticalAlign: 'top',
      [theme.breakpoints.up('md')]: {
        fontSize: '25px',
      },
    },
    icon: {
      fontSize: '20px',
      marginRight: '25px',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
    },
    footerLogo: {
      width: '126px',
      height: '45px',
      [theme.breakpoints.up('md')]: {
        width: '220px',
        height: '78px',
      },
    }
  }

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLinksAndLogoContainer}>
        <Box sx={styles.footerLogoContainer}>
          <Box component='img' src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="ETC Services Logo" sx={styles.footerLogo}></Box>
        </Box>
        <Box sx={styles.footerLinksContainer}>
          <Typography component='a' sx={styles.footerLinks}>Services</Typography>
          <Typography component='a' sx={styles.footerLinks}>Contact Us</Typography>
          <Box>
            <EmailIcon sx={styles.emailIcon}/>
            <Typography component='a' sx={styles.contactEmailText}>info@etcservices.com</Typography>
          </Box>
          <Box sx={styles.footerIconsContainer}>
            <FacebookIcon sx={styles.icon}/>
            <TwitterIcon sx={styles.icon}/>
            <LinkedInIcon sx={styles.icon}/>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.footerText}>
        <span>Ⓒ ETCServices 2022. All Rights Reserved.</span>
      </Box>
    </Box>
  );
}

export default Footer;