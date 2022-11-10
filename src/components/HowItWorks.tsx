import { Box, Button } from "@mui/material";
import { Pages } from "../types/types";
import Card from "./Card";


const HowItWorks = () => {
  const styles = {
    headingContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/HowItWorksHeader.png'})`,
      backgroundSize: 'cover',
      height: '137px',
      paddingLeft: '16px',
      paddingTop: '30px',
      marginBottom: '35px',
      backgroundPosition: 'center',
    },
    howText: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '40px',
      lineHeight: '75px',
      color: '#47B5FF',
    },
    workText: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '40px',
      lineHeight: '75px',
      color: '#DFF6FF',
    },
    howItWorksContainer: {
    },
    cardContainerStyle1: {
      background: 'rgba(238, 238, 238, 0.8)',
      display: 'flex',
      padding: '16px',
      justifyContent: 'space-evenly'
    },
    cardContainerStyle2: {
      display: 'flex',
      flexDirection: 'row-reverse',
      padding: '16px',
      justifyContent: 'space-evenly'
    },
    iconStyle: {
      width: '185px',
      height: '185px',

    },
    cardLabelStyle: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '25px',
      color: '#4C81C7',
    },
    cardContentStyle: {
      textAlign: 'left',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#06283D',
      marginTop: '0px',
    },
    workWithUsContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/WorkWithUs.png'})`,
      height: '190px',
      marginBottom: '35px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '32px',
      paddingBottom: '32px',
      textAlign: 'center',
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
    workWithUsText: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '75px',
      color: '#DFF6FF',
      marginBottom: '10px',
    },
    buttonWrapper: {
      textAlign: 'center',
    },
    getStartedTextSx: {
      fontWeight: 700,
      fontSize: '20px',
    },
  };

  const cardContents = [
    {
      iconUrl: '/assets/discovery.png',
      cardLabel: 'We invite you for a discovey meeting',
      cardContent: 'We will help you find a solution in searching and hiring for virtual staff that is qualified and will meet your specific business needs.',
      cardContainerStyle: styles.cardContainerStyle1,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Discovery Icon',
    },
    {
      iconUrl: '/assets/jobdesc.png',
      cardLabel: 'Provide your job description',
      cardContent: 'Give us a job description of your requirement for the role you want to fill in.',
      cardContainerStyle: styles.cardContainerStyle2,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Job Description Icon',
    },
    {
      iconUrl: '/assets/recruitment.png',
      cardLabel: 'Recruitment',
      cardContent: 'Our team will source, screen and interview candidates who are perfect for what you are looking for.',
      cardContainerStyle: styles.cardContainerStyle1,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Recruitment Icon',
    },
    {
      iconUrl: '/assets/candidate.png',
      cardLabel: 'Choose your candidate',
      cardContent: 'We will send you resumes of the best candidates and choose whomever you want to interview.',
      cardContainerStyle: styles.cardContainerStyle2,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Candidate Icon',
    },
    {
      iconUrl: '/assets/onboarding.png',
      cardLabel: 'Onboarding',
      cardContent: "We'll get them set up for you - Payroll, Time Tracker system, and employee monitoring.",
      cardContainerStyle: styles.cardContainerStyle1,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Onboarding Icon',
    },
    {
      iconUrl: '/assets/management.png',
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
          <span style={styles.howText}>How it</span>
          <span style={styles.workText}> Works.</span>
        </Box>
      </Box>
      <Box sx={styles.howItWorksContainer}>
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
              />
          )
        })}
      </Box>
      <Box sx={styles.workWithUsContainer}>
        <span style={styles.workWithUsText}>Work with Us</span>
        <Box sx={styles.buttonWrapper}>
          <Button variant='contained' sx={styles.getStartedButtonSx}>
            <span style={styles.getStartedTextSx}>
              Get Started
            </span>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HowItWorks;