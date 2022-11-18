import { Box, Typography } from "@mui/material";
import { theme } from "..";
import { Pages } from "../types/types";
import Card from "./Card";

function Services() {
  const styles = {
    headerContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/servicesHeader.png'})`,
      height: '137px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      padding: '30px 16px',
      marginBottom: '35px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        height: '150px',
        padding: '37px 32px',
        marginBottom: '58px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '200px',
        marginBottom: '78px',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '181px',
      },
    },
    ourText: {
      fontStyle: 'normal',
      fontWeight: 700,
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
    servicesText: {
      color: '#DFF6FF',
    },
    cardContainerStyle: {
      background: 'rgba(238, 238, 238, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '41px',
      paddingTop: '23px',
      textAlign: 'center',
      maxWidth: '390px',
      width: '100vw',
      [theme.breakpoints.up('md')]: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        width: '238px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '365px',
      },
    },
    cardLabelStyle: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '30px',
      color: '#4C81C7',
      padding: '16px',
    },
    cardContentStyle: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#06283D',
      textAlign: 'left',
      [theme.breakpoints.up('md')]: {
        fontSize: '15px',
        lineHeight: '30px',
      },
    },
    getStartedButtonSx: {
      background: '#4C81C7',
      borderRadius: '20px',
      textTransform: 'none',
      width: '169px',
      height: '41px',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        width: '100%',
        borderRadius: '0px 0px 20px 20px',
        height: '53px',
      },
    },
    getStartedTextSx: {
      fontWeight: 500,
      fontSize: '16px',
      color: '#DFF6FF',
    },
    buttonWrapper: {
      textAlign: 'center',
      transform: 'translateY(22px)',
      [theme.breakpoints.up('md')]: {
        transform: 'translateY(0px)',
        display: 'flex',
        flexGrow: '1',
        alignItems: 'flex-end',
      },
    },
    serviceCoverageLabelContainer: {
      position: 'absolute',
      width: '225px',
      background: '#06283D',
      borderRadius: '50px',
      textAlign: 'right',
      padding: '5px',
      height: '44px',
      transform: 'translate(-20px, -22px)',
      paddingRight: '20px',
      [theme.breakpoints.up('md')]: {
        height: '60px',
        width: '432px',
        transform: 'translate(-40px, -30px)',
        paddingRight: '60px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '70px',
        width: '595px',
        transform: 'translate(-201px, -35px)',
        paddingRight: '65px',
      },
      [theme.breakpoints.up('xl')]: {
        transform: 'translate(-42px, -35px)',
      },
    },
    serviceCoverageLabel: {
      fontSize: '20px',
      fontWeight: 800,
      color: '#DFF6FF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '35px',
      },
    },
    serviceCoverageContainer: {
      background: '#EEEEEE',
      marginBottom: '35px',
      paddingTop: '44px',
      paddingRight: '16px',
      paddingBottom: '36px',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      color: '#06283D',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '40px',
        padding: '58px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '59px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '25px',
        lineHeight: '40px',
        marginBottom: '80px',
        padding: '78px',
      },
    },
    servicesImage: {
      width: '280px',
      height: '236px',
      [theme.breakpoints.up('lg')]: {
        width: '364px',
        height: '333px',
      },
    },
    imageContainer: {
      marginTop: '36px',
      width: '100%',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        width: '272px',
        height: '231px',
        marginTop: '0px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '364px',
        height: '333px',
      },
    },
    quoteText: {
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '20px',
      lineHeight: '30px',
      color: '#4C81C7',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
        lineHeight: '40px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '35px',
        lineHeight: '40px',
      },
    },
    quoteContainer: {
      textAlign: 'center',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    listContainer: {
      background: 'rgba(238, 238, 238, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      color: '#06283D',
      width: 'calc(100vw - 32px)',
      maxWidth: '390px',
      paddingTop: '28px',
      paddingBottom: '28px',
      paddingRight: '20px',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        padding: '44px 25px',
        lineHeight: '40px',
        maxWidth: '563px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '25px',
      },
    },
    listWrapperContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '35px 16px',
      [theme.breakpoints.up('md')]: {
        marginBottom: '80px',
      },
    },
    cardsContainerStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '57px',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        paddingRight: '121px',
        paddingLeft: '121px',
        justifyContent: 'space-evenly',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '74px',
      },
      [theme.breakpoints.up('xl')]: {
        paddingRight: '200px',
        paddingLeft: '200px',
      },
    },
  };
  const cardContents = [
    {
      cardLabel: 'Administration & Support',
      cardContent: 
      <>
        <li>Customer Support Representative</li>
        <li>Data Encoder</li>
        <li>Legal Assistant</li>
        <li>Technical Support Staff</li>
        <li>Virtual Assistants</li>
        <li>Recruitment Assistants</li>
      </>,
      cardContainerStyle: styles.cardContainerStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      buttonWrapperStyle: styles.buttonWrapper,
      buttonStyle: styles.getStartedButtonSx,
      buttonTextStyle: styles.getStartedTextSx,
    },
    {
      cardLabel: 'Finance & Accounting',
      cardContent: 
      <>
        <li>Bookkeepers</li>
        <li>Accounts Payable Specialist</li>
        <li>Payroll Specialist</li>
        <li>Credit & Collections Experts</li>
        <li>Accountants</li>
      </>,
      cardContainerStyle: styles.cardContainerStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      buttonWrapperStyle: styles.buttonWrapper,
      buttonStyle: styles.getStartedButtonSx,
      buttonTextStyle: styles.getStartedTextSx,
    },
    {
      cardLabel: 'Sales & Marketing',
      cardContent:
      <>
        <li>Graphic Designers</li>
        <li>Lead Generation Experts</li>
        <li>Marketing Assistants</li>
        <li>Social Media Managers</li>
        <li>Social Media Influencer Coordinators</li>
        <li>Bloggers & Copywriters</li>
        <li>SEO Specialists</li>
        <li>Telemarketers</li>
      </>,
      cardContainerStyle: styles.cardContainerStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      buttonWrapperStyle: styles.buttonWrapper,
      buttonStyle: styles.getStartedButtonSx,
      buttonTextStyle: styles.getStartedTextSx,
    },
    {
      cardLabel: 'Web Developers & Programmers',
      cardContent:
      <>
        <li>PHP Developers</li>
        <li>Project managers</li>
        <li>Quality Assurance Specialists</li>
        <li>System Administrators</li>
        <li>Web Designers</li>
        <li>Software Developers</li>
        <li>Software Testers</li>
      </>,
      cardContainerStyle: styles.cardContainerStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      buttonWrapperStyle: styles.buttonWrapper,
      buttonStyle: styles.getStartedButtonSx,
      buttonTextStyle: styles.getStartedTextSx,
    },
    {
      cardLabel: 'Real Property',
      cardContent:
      <>
        <li>Appointment Setter</li>
      </>,
      cardContainerStyle: styles.cardContainerStyle,
      cardLabelStyle: styles.cardLabelStyle,
      cardContentStyle: styles.cardContentStyle,
      buttonWrapperStyle: styles.buttonWrapper,
      buttonStyle: styles.getStartedButtonSx,
      buttonTextStyle: styles.getStartedTextSx,
    },
  ];
  return (
    <>
      <Box sx={styles.headerContainer}>
        <Box>
          <Typography component='span' sx={styles.ourText}>Our</Typography>
          <Typography component='span' sx={{...styles.ourText, ...styles.servicesText}}> Services.</Typography>
        </Box>
      </Box>
      {/* @ts-ignore */}
      <Box sx={styles.cardsContainerStyle}>
        {cardContents.map((cardContent) => {
          return (
            <Card
              cardLabel = {cardContent.cardLabel}
              cardContent = {cardContent.cardContent}
              cardContainerStyle = {cardContent.cardContainerStyle}
              cardLabelStyle = {cardContent.cardLabelStyle}
              cardContentStyle = {cardContent.cardContentStyle}
              page = {Pages.SERVICES}
              buttonLabel = 'Hire Staff'
              buttonWrapperStyle = {cardContent.buttonWrapperStyle}
              buttonStyle = {cardContent.buttonStyle}
              buttonLabelStyle = {cardContent.buttonTextStyle}
              />
          )
        })}
      </Box>
      <Box sx={styles.serviceCoverageLabelContainer}>
        <Typography component='span' sx={styles.serviceCoverageLabel}>
          Service Coverage
        </Typography>
      </Box>
      <Box sx={styles.serviceCoverageContainer}>
        <ul style={{margin: '0px'}}>
          <li>Recruitment Services (Sourcing & Talent Acquisition)</li>
          <li>Attendance Tracking System</li>
          <li>Payroll Services</li>
          <li>Benefits Administration</li>
          <li>Remote Work Monitoring Tool</li>
          <li>Screenshot Checks</li>
          <li>Administrative Support</li>
          <li>Technical Support</li>
          <li>Engagement Activities & Retention Programs</li>
          <li>Client Services - Dedicated Account Manager to support you</li>
        </ul>
        <Box sx={styles.imageContainer}>
          <Box component='img' src={process.env.PUBLIC_URL + '/assets/servicesImage.png'} alt='Services' sx={styles.servicesImage}></Box>
        </Box>
      </Box>
      <Box sx={styles.quoteContainer}>
        <Typography component='span' sx={styles.quoteText}>Our Tools and Systems to help you manage your staff remotely</Typography>
      </Box>
      <Box sx={styles.listWrapperContainer}>
        <Box sx={styles.listContainer}>
          <ul style={{margin: '0px'}}>
            <li>Website and Applications Tracking</li>
            <li>Time tracking and reporting</li>
            <li>Screenshot reports</li>
            <li>Productivity Reports</li>
            <li>Internet Connectivity Report</li>
          </ul>
        </Box>
      </Box>
    </>
  );
}

export default Services;