import { Box, Button, Typography } from '@mui/material';
import { theme } from '..';
import { Pages } from '../types/types';

interface IHomeProps {
  setVisiblePage: Function,
}


function Home(props: IHomeProps) {
  const { setVisiblePage } = props;
  const styles = {
    homeHeader: {
      width: '100vw',
      maxWidth: '500px',
      height: '360px',
      paddingTop: '53px',
      paddingLeft: '16px',
      paddingRight: '16px',
      [theme.breakpoints.up('md')]: {
        height: '520px',
        paddingTop: '74px',
        paddingLeft: '32px',
        paddingRight: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '594px',
        paddingTop: '95px',
        paddingLeft: '40px',
        maxWidth: '525px',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '200px',
        maxWidth: '700px',
      },
    },
    heading1: {
      color: 'white',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '45px',
      marginBottom: '10px',
      display: 'block',
      [theme.breakpoints.up('md')]: {
        lineHeight: '75px',
        fontSize: '60px',
        marginBottom: '15px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '70px',
        marginBottom: '25px',
      },
    },
    heading2: {
      color: '#47B5FF',
      fontWeight: 700,
      fontSize: '70px',
      lineHeight: '75px',
      marginBottom: '46px',
      display: 'block',
      [theme.breakpoints.up('md')]: {
        lineHeight: '75px',
        fontSize: '90px',
        marginBottom: '85px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '100px',
      },
    },
    getStartedButtonSx: {
      background: 'rgba(76, 129, 199, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      borderRadius: '20px',
      textTransform: 'none',
      width: '151px',
      height: '41px',
      [theme.breakpoints.up('md')]: {
        width: '180px',
        height: '50px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '234px',
        height: '63px',
      },
      margin: '0 auto',
    },
    getStartedTextSx: {
      fontWeight: 700,
      fontSize: '20px',
      [theme.breakpoints.up('md')]: {
        fontSize: '23px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '30px',
      },
    },
    buttonWrapper: {
      textAlign: 'center',
    },
    aboutUsLabel: {
      fontSize: '20px',
      fontWeight: 800,
      color: '#DFF6FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '35px',
      },
    },
    aboutUsLabelContainer: {
      position: 'absolute',
      width: '225px',
      background: '#06283D',
      borderRadius: '50px',
      textAlign: 'right',
      padding: '5px',
      height: '44px',
      transform: 'translate(-20px, -22px)',
      paddingRight: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        width: '498px',
        height: '60px',
        transform: 'translate(-197px, -30px)',
        fontSize: '30px',
        paddingRight: '59px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '498px',
        height: '70px',
        transform: 'translate(-197px, -35px)',
        fontSize: '35px',
        paddingRight: '59px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '698px',
      },
    },
    aboutUsContent: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#06283D',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '35px',
      },
    },
    aboutUsContainer: {
      paddingTop: '43px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingBottom: '13px',
      background: '#EEEEEE',
      marginBottom: '35px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        paddingRight: '33px',
        paddingLeft: '33px',
        paddingBottom: '28px',
        paddingTop: '66px',
        marginBottom: '60px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingBottom: '29px',
        paddingRight: '65px',
        paddingLeft: '65px',
        marginBottom: '80px',
      },
      [theme.breakpoints.up('xl')]: {
        paddingRight: '265px',
        paddingLeft: '265px',
      },
    },
    companyText: {
      color: '#4C81C7',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '28px',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '35px',
      },
    },
    imageBackgroundWrapper: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/HomeBackground.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: '56px',
      [theme.breakpoints.up('md')]: {
        marginBottom: '90px',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '116px',
      },
    },
    aboutUsContentContainer: {
      maxWidth: '390px',
      [theme.breakpoints.up('md')]: {
        maxWidth: '768px',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '1080px',
      },
    }
  }

  return (
    <>
      <Box sx={styles.imageBackgroundWrapper}>
        <Box sx={styles.homeHeader}>
          <Typography component='span' sx={styles.heading1}>Your partner towards</Typography>
          <Typography component='span' sx={styles.heading2}>GROWTH</Typography>
          <Box sx={styles.buttonWrapper}>
            <Button
            variant='contained' 
            sx={styles.getStartedButtonSx}
            onClick={(e) => {
            setVisiblePage(Pages.CONTACT_US);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}>
              <Typography component='span' sx={styles.getStartedTextSx}>
                Get Started
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.aboutUsLabelContainer}>
        <Typography component='span' sx={styles.aboutUsLabel}>
          About Us
        </Typography>
      </Box>
      
      <Box sx={styles.aboutUsContainer}>
        <Box sx={styles.aboutUsContentContainer}>
          <Typography component='p' sx={styles.aboutUsContent}><Typography component='span' sx={styles.companyText}>ETC Services</Typography> is a company managed and owned by a group of friends who are highly-skilled professionals with varied expertise in their own fields servicing clients and stakeholders from different countries. It is a spin-off of their long collaborative experience in the outsourcing and offshoring industry for many years.</Typography><br/>
          <Typography component='p' sx={styles.aboutUsContent}>ETC Services is committed to help you with your business needs by facilitating and overseeing everything from recruitment, onboarding, payroll, and other administrative and support functions. You have full control of your remote staff while we take care of the rest.</Typography><br/>
          <Typography component='p' sx={styles.aboutUsContent}>By using our in-house tools, you can communicate with your staff directly and see their performance in real time. This makes collaboration much easier.</Typography><br/>
          <Typography component='p' sx={styles.aboutUsContent}>We aim to provide businesses with quality remote staff that match your requirements and achieve scalable growth for your organization. We make the process simple and easy for you!</Typography><br/>
        </Box>
      </Box>
    </>
  );
}

export default Home;
