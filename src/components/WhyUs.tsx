import { Box, Button, Typography } from "@mui/material";
import { theme } from "..";
import { Pages } from "../types/types";
import Card from "./Card";

const WhyUs = () => {
  const styles = {
    headingContainer: {
      width: '100vw',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/WhyUsHeader.jpg'})`,
      backgroundSize: 'cover',
      paddingTop: '49px',
      paddingBottom: '49px',
      marginBottom: '57px',
      [theme.breakpoints.up('md')]: {
        marginBottom: '90px',
      },
    },
    headerTextContainer: {
      background: 'rgba(6, 40, 61, 0.7)',
      height: '317px',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '16px',
      paddingLeft: '16px',
      paddingTop: '27px',
      maxWidth: '595px',
      [theme.breakpoints.up('md')]: {
        height: '519px',
        paddingRight: '46px',
        paddingLeft: '46px',
        paddingTop: '42px',
      },
    },
    whyText:{
      fontSize: '40px',
      lineHeight: '45px',
      fontWeight: 700,
      color: '#DFF6FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '75px',
      },
    },
    etcText:{
      fontSize: '60px',
      lineHeight: '60px',
      fontWeight: 700,
      color: '#47B5FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '90px',
        lineHeight: '90px',
      },
    },
    servicesText:{
      fontSize: '60px',
      lineHeight: '60px',
      fontWeight: 700,
      color: '#47B5FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '90px',
        lineHeight: '90px',
      },
    },
    headerContentText:{
      fontSize: '14px',
      lineHeight: '25px',
      fontWeight: 400,
      color: '#DFF6FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 300,
      },
    },
    buttonWrapper: {
      textAlign: 'center',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      [theme.breakpoints.up('md')]: {
        display: 'block',
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
      transform: 'translateY(22px)',
      [theme.breakpoints.up('md')]: {
        transform: 'translateY(0px)',
        width: '180px',
        height: '50px',
        marginTop: '20px',
      },
    },
    getStartedTextSx: {
      fontWeight: 700,
      fontSize: '20px',
      [theme.breakpoints.up('md')]: {
        fontSize: '23px',
      },
    },
    whatWeOfferContainer: {
      borderTop: '2px solid #EEEEEE',
      paddingTop: '46px',
      paddingLeft: '16px',
      paddingRight: '16px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: '19px',
      [theme.breakpoints.up('md')]: {
        paddingTop: '90px',
        paddingLeft: '40px',
        paddingRight: '40px',
        marginBottom: '40px',
      },
    },
    whatWeOfferLabelContainer: {
      position: 'absolute',
      width: '225px',
      background: '#06283D',
      borderRadius: '50px',
      textAlign: 'right',
      padding: '5px',
      height: '44px',
      transform: 'translate(-20px, -22px)',
      paddingRight: '40px',
      [theme.breakpoints.up('md')]: {
        width: '373px',
        height: '60px',
        transform: 'translate(-34px, -30px)',
      },
    },
    whatWeOfferLabelText: {
      fontSize: '20px',
      fontWeight: 800,
      color: '#DFF6FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
    },
    cardContainerStyle: {
      background: 'rgba(238, 238, 238, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '12px 10px',
      width: '169px',
      marginBottom: '20px',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
        width: '100vw',
        flexDirection: 'row',
        textAlign: 'left',
        padding: '12px 28px',
        alignItems: 'center',
      },
    },
    iconStyle: {
      width: '50px',
      height: '50px',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        width: '60px',
        height: '60px',
        margin: '0',
        marginRight: '23px',
      },

    },
    cardLabelStyle: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '30px',
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
    whyUsImage: {
      marginBottom: '39px',
      width: '100vw',
      maxWidth: '563px',
      [theme.breakpoints.up('md')]: {
        marginBottom: '60px',
      },
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }
  }

  const cardContents = [
    {
      iconUrl: '/assets/HiringIcon.png',
      cardLabel: 'Hiring',
      cardContent: 'We will help you find a solution in searching and hiring for virtual staff that is qualified and will meet your specific business needs.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Hiring Icon',
    },
    {
      iconUrl: '/assets/SkilledIcon.png',
      cardLabel: 'Skilled',
      cardContent: 'We have a large pool of highly skilled, English-speaking professionals from the Philippines.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Skilled Icon',
    },
    {
      iconUrl: '/assets/FlexibilityIcon.png',
      cardLabel: 'Flexibility',
      cardContent: 'We listen and adapt to changes. We will understand your needs and we will help you meet your business requirements.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Flexibility Icon',
    },
    {
      iconUrl: '/assets/ControlIcon.png',
      cardLabel: 'Control',
      cardContent: 'You have full control & transparency on whom you would like to work for you and how you would like to run your operations.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Control Icon',
    },
    {
      iconUrl: '/assets/HoursWorkedIcon.png',
      cardLabel: 'Hours Worked',
      cardContent: 'You only pay for the hours your staff worked.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Hours Worked Icon',
    },
    {
      iconUrl: '/assets/SupportIcon.png',
      cardLabel: 'Support',
      cardContent: 'We have committed account managers to support you.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Support Icon',
    },
    {
      iconUrl: '/assets/AccessIcon.png',
      cardLabel: 'Access',
      cardContent: 'You will have access to your staff performance by using our remote work monitoring tool. This will ensure your offshore staff are being highly productive and performing as they should deliver and exceed your goals and expectations.',
      cardContainerStyle: styles.cardContainerStyle,
      iconStyle: styles.iconStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      iconAlt: 'Access Icon',
    },
  ];
  return (
    <>
      <Box sx={styles.headingContainer}>
        <Box sx={styles.headerTextContainer}>
          <Typography component='span' sx={styles.whyText}>Why</Typography>
          <Typography component='span' sx={styles.etcText}>ETC</Typography>
          <Typography component='span' sx={styles.servicesText}>SERVICES</Typography>
          <Typography component='span' sx={styles.headerContentText}>We provide businesses with quality remote staff that matches your requirements and achieves scalable growth for your organization.</Typography>
          <Box sx={styles.buttonWrapper}>
            <Button variant='contained' sx={styles.getStartedButtonSx}>
              <Typography component='span' sx={styles.getStartedTextSx}>
                Get Started
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.whatWeOfferLabelContainer}>
        <Typography component='span' sx={styles.whatWeOfferLabelText}>
          What we Offer
        </Typography>
      </Box>
      <Box sx={styles.whatWeOfferContainer}>
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
              page = {Pages.WHY_US} 
              />
          )
        })}
      </Box>
      <Box sx={styles.imageContainer}>
        <Box component='img' src={process.env.PUBLIC_URL + '/assets/GroupOfPeople.png'} alt="Group of people" sx={styles.whyUsImage}></Box>
      </Box>
    </>
  );
};

export default WhyUs;