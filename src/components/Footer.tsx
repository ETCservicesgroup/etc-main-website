import { Box, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { theme } from "..";
import { Pages } from "../types/types";

interface IHeaderProps {
  setVisiblePage: Function,
}

function Footer(props: IHeaderProps) {
  const { setVisiblePage } = props;
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
      [theme.breakpoints.up('lg')]: {
        display: 'none',
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
      [theme.breakpoints.up('lg')]: {
        marginBottom: '20px',
      },
    },
    footerLinks: {
      fontSize: '14px',
      fontWeight: 500,
      color: '#DFF6FF',
      paddingBottom: '10px',
      cursor: 'pointer',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('lg')]: {
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
      [theme.breakpoints.up('lg')]: {
        width: '230px',
        height: '81.61px',
      },
    },
    footerTextLg: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'block',
        textAlign: 'center',
        fontSize: '14px',
        color: '#DFF6FF',
        fontWeight: 400,
      },
    },
  }

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLinksAndLogoContainer}>
        <Box sx={styles.footerLogoContainer}>
          <Box component='img' src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="ETC Services Logo" sx={styles.footerLogo}></Box>
        </Box>
        <Box sx={styles.footerLinksContainer}>
          <Typography
            component='a'
            sx={styles.footerLinks}
            onClick={() => {
              setVisiblePage(Pages.SERVICES);
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
          >
            Services
          </Typography>
          <Typography
            component='a'
            sx={styles.footerLinks}
            onClick={() => {
              setVisiblePage(Pages.CONTACT_US);
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
          >
            Contact Us
          </Typography>
          <Box>
            <EmailIcon sx={styles.emailIcon}/>
            <Typography component='a' sx={styles.contactEmailText}>info@etcservices.com</Typography>
          </Box>
          <Box sx={styles.footerIconsContainer}>
            <FacebookIcon sx={styles.icon}/>
            <TwitterIcon sx={styles.icon}/>
            <LinkedInIcon sx={styles.icon}/>
          </Box>
          <Box sx={styles.footerTextLg}>
            <Typography component='span'>Ⓒ ETCServices 2022. All Rights Reserved.</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.footerText}>
        <Typography component='span'>Ⓒ ETCServices 2022. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;