import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "..";
import { Pages } from "../types/types";
import Card from "./Card";

interface IHowItWorksProps {
  setVisiblePage: Function;
};


const HowItWorks = (props: IHowItWorksProps) => {
  const { setVisiblePage } = props;
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const styles = {
    headingContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/HowItWorksHeader.png'})`,
      backgroundSize: 'cover',
      height: '137px',
      paddingLeft: '16px',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        height: '150px',
        paddingLeft: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '200px',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '192px',
      },
    },
    howText: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '40px',
      lineHeight: '75px',
      color: '#47B5FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '60px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '70px',
      },
    },
    workText: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '40px',
      lineHeight: '75px',
      color: '#DFF6FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '60px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '70px',
      },
    },
    cardContainerStyle1: {
      background: '#EEEEEE',
      display: 'flex',
      padding: '16px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        padding: '0px 50px',
      },
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'center',
      },
    },
    cardContainerStyle2: {
      display: 'flex',
      flexDirection: 'row-reverse',
      padding: '16px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        padding: '0px 50px',
      },
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'center',
        flexDirection: 'row',
      },
    },
    iconStyle: {
      width: '185px',
      height: '185px',
      [theme.breakpoints.up('md')]: {
        width: '242px',
        height: '242px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '422px',
        height: '242px',
        marginRight: '43px',
      },
    },
    cardLabelStyle: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '25px',
      color: '#4C81C7',
      [theme.breakpoints.up('md')]: {
        lineHeight: '30px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '25px',
      },
    },
    cardContentStyle: {
      textAlign: 'left',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#06283D',
      marginTop: '4px',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '25px',
        marginTop: '10px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
        lineHeight: '25px',
        marginTop: '20px',
      },
    },
    workWithUsContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/WorkWithUs.png'})`,
      height: '190px',
      marginBottom: '35px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        marginTop: '60px',
        height: '300px',
        marginBottom: '60px',
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: '74px',
        height: '330px',
        marginBottom: '80px',
      },
    },
    getStartedButtonSx: {
      background: 'rgba(76, 129, 199, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      borderRadius: '20px',
      textTransform: 'none',
      width: '151px',
      height: '41px',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        width: '180px',
        height: '50px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '234px',
        height: '63px',
      },
    },
    workWithUsText: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '75px',
      color: '#DFF6FF',
      marginBottom: '10px',
      [theme.breakpoints.up('md')]: {
        fontSize: '60px',
        marginBottom: '58px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '70px',
        marginBottom: '58px',
      },
    },
    buttonWrapper: {
      textAlign: 'center',
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
    contentContainerStyle: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: '551px',
      },
    },
    headerLabelContainerWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerLabelContainer: {
      height: '178px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        height: '202px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '249px',
      },
    },
    headerLabel: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '40px',
      color: '#4C81C7',
      [theme.breakpoints.up('md')]: {
        fontSize: '40px',
        lineHeight: '65px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '45px',
        lineHeight: '75px',
      },
    },
    headerLabelContent: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#06283D',
      maxWidth: '358px',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
        maxWidth: '439px',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '100vw',
      },
    }
  };

  const cardContents = [
    {
      iconUrl: width >= 1080 ? '/assets/1HowItWorks.png' : '/assets/discovery.png',
      cardLabel: 'We invite you for a discovery meeting',
      cardContent: 'We will help you find a solution in searching and hiring for virtual staff that is qualified and will meet your specific business needs.',
      cardContainerStyle: styles.cardContainerStyle1,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Discovery Icon',
    },
    {
      iconUrl: width >= 1080 ? '/assets/2HowItWorks.png' : '/assets/jobdesc.png',
      cardLabel: 'Provide your job description',
      cardContent: 'Give us a job description of your requirement for the role you want to fill in.',
      cardContainerStyle: styles.cardContainerStyle2,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Job Description Icon',
    },
    {
      iconUrl: width >= 1080 ? '/assets/3HowItWorks.png' : '/assets/recruitment.png',
      cardLabel: 'Recruitment',
      cardContent: 'Our team will source, screen and interview candidates who are perfect for what you are looking for.',
      cardContainerStyle: styles.cardContainerStyle1,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Recruitment Icon',
    },
    {
      iconUrl: width >= 1080 ? '/assets/4-HowItWorks.png' : '/assets/candidate.png',
      cardLabel: 'Choose your candidate',
      cardContent: 'We will send you resumes of the best candidates and choose whomever you want to interview.',
      cardContainerStyle: styles.cardContainerStyle2,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Candidate Icon',
    },
    {
      iconUrl: width >= 1080 ? '/assets/5HowItWorks.png' : '/assets/onboarding.png',
      cardLabel: 'Onboarding',
      cardContent: "We'll get them set up for you - Payroll, Time Tracker system, and employee monitoring.",
      cardContainerStyle: styles.cardContainerStyle1,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Onboarding Icon',
    },
    {
      iconUrl: width >= 1080 ? '/assets/6HowItWorks.png' : '/assets/management.png',
      cardLabel: 'Management',
      cardContent: 'We will send you resumes of the best candidates and choose whomever you want to interview.',
      cardContainerStyle: styles.cardContainerStyle2,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Management Icon',
    },
  ];
  return (
    <>
      <Box sx={styles.headingContainer}>
        <Box>
          <Typography component='span' sx={styles.howText}>How it</Typography>
          <Typography component='span' sx={styles.workText}> Works.</Typography>
        </Box>
      </Box>
      <Box sx={styles.headerLabelContainerWrapper}>
        <Box sx={styles.headerLabelContainer}>
          <Typography component='span' sx={styles.headerLabel}>How ETC SERVICES Works</Typography>
          <Typography component='span' sx={styles.headerLabelContent}>We demonstrate a step-by-step process on how we may assist you in running your business.</Typography>
        </Box>
      </Box>
      <Box>
        {cardContents.map((cardContent) => {
          return (
            <Card 
              iconUrl = {cardContent.iconUrl}
              cardLabel = {cardContent.cardLabel}
              cardContent = {cardContent.cardContent}
              cardContainerStyle = {cardContent.cardContainerStyle}
              iconStyle = {cardContent.iconStyle}
              cardLabelStyle = {cardContent.cardLabelStyle}
              cardContentStyle = {cardContent.cardContentStyle}
              iconAlt = {cardContent.iconAlt} 
              page = {Pages.HOW_IT_WORKS}
              contentContainerStyle = {styles.contentContainerStyle}
              />
          )
        })}
      </Box>
      <Box sx={styles.workWithUsContainer}>
        <Typography component='span' sx={styles.workWithUsText}>Work with Us</Typography>
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
    </>
  );
};

export default HowItWorks;