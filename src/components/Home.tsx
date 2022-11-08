import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { theme } from '..';

//@ts-ignore
function Home(props) {
  const styles = {
    imageStyle: {
      width: '100vw',
      height: '360px',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/HomeBackground.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: '-240px',
      paddingTop: '53px',
      paddingLeft: '16px',
      paddingRight: '16px',
      marginBottom: '56px',
      [theme.breakpoints.up('sm')]: {
        backgroundPosition: '0px',
      },
    },
    heading1: {
      color: 'white',
    },
    heading2: {
      color: '#47B5FF',
      marginBottom: '46px',
    },
    getStartedButtonSx: {
      background: 'rgba(76, 129, 199, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      borderRadius: '20px',
      textTransform: 'none',
      width: '151px',
      height: '41px',
      margin: '0 auto',
    },
    getStartedTextSx: {
      fontWeight: 700,
      fontSize: '20px',
    },
    buttonWrapper: {
      textAlign: 'center',
    },
    aboutUsLabel: {
      fontSize: '20px',
      fontWeight: 800,
      color: '#DFF6FF',
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
    },
    aboutUsContent: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#06283D',
    },
    aboutUsContainer: {
      paddingTop: '43px',
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingBottom: '13px',
      background: '#EEEEEE',
      marginBottom: '35px',
    },
    companyText: {
      color: '#4C81C7',
      fontWeight: 700,
    },
    aboutUsParagraph: {
      marginTop: '0px',
    }
  }

  return (
    <>
      <Box sx={styles.imageStyle}>
        <Typography variant='h3' sx={styles.heading1}>Your partner towards</Typography>
        <Typography variant='h2' sx={styles.heading2}>GROWTH</Typography>
        <Box sx={styles.buttonWrapper}>
          <Button variant='contained' sx={styles.getStartedButtonSx}>
            <span style={styles.getStartedTextSx}>
              Get Started
            </span>
          </Button>
        </Box>
      </Box>

      <Box sx={styles.aboutUsLabelContainer}>
        <span style={styles.aboutUsLabel}>
          About Us
        </span>
      </Box>
      
      <Box sx={styles.aboutUsContainer}>
        <Box sx={styles.aboutUsContent}>
          <p style={styles.aboutUsParagraph}><span style={styles.companyText}>ETC Services</span> is committed to help you with your business needs by facilitating and overseeing everything from recruitment, onboarding, payroll, and other administrative and support functions. You have full control of your remote staff while we take care of the rest.</p>
          <p>By using our in-house tools, you can communicate with your staff directly and see their performance in real time. This makes collaboration much easier.</p>
          <p>We aim to provide businesses with quality remote staff that match your requirements and achieve scalable growth for your organization. We make the process simple and easy for you!</p>
        </Box>
      </Box>
    </>
  );
}

export default Home;