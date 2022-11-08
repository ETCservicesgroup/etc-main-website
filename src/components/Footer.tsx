import { Box } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


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
    },
    footerText: {
      textAlign: 'center',
      fontSize: '10px',
      color: '#DFF6FF',
      fontWeight: 400,
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
    },
    contactEmailText: {
      fontSize: '12px',
      color: '#DFF6FF',
      fontWeight: 500,
      verticalAlign: 'top',
      paddingLeft: '8px',
    },
    emailIcon: {
      color: '#DFF6FF',
      fontSize: '20px',
      verticalAlign: 'top',
    },
    icon: {
      fontSize: '20px',
      marginRight: '30px',
    }
  }

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLinksAndLogoContainer}>
        <Box sx={styles.footerLogoContainer}>
          <span>ETC LOGO</span>
        </Box>
        <Box sx={styles.footerLinksContainer}>
          <a style={styles.footerLinks}>Services</a>
          <a style={styles.footerLinks}>Contact Us</a>
          <Box>
            <EmailIcon sx={styles.emailIcon}/>
            <span style={styles.contactEmailText}>info@etcservices.com</span>
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