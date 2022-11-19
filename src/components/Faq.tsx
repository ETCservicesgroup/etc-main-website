import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaqPanel, Pages } from "../types/types";

interface IFaqProps {
  setVisiblePage: Function;
}

const Faq = (props: IFaqProps) => {
  const { setVisiblePage } = props;
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerContainer: {
      width: '100%',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/FAQHeader.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '137px',
      transform: 'scaleX(-1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingRight: '16px',
      marginBottom: '21px',
    },
    headerContent: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '75px',
      color: '#47B5FF',
    },
    faqContainer: {
      maxWidth: '390px',
    },
    faqLabel: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '45px',
      color: '#4C81C7',
    },
    faqLabelContainer: {
      backgroundColor: '#EEEEEE',
      padding: '10px 16px',
      paddingTop: '0px',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '390px',
      marginBottom: '48px',
    },
    faqLabelContent: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '25px',
      color: '#06283D',
    },
    accordionRoot: {
      boxShadow: '0px 0px 0px 0px',
      '&:first-of-type': {
        borderRadius: '0px',
      },
      '&.Mui-expanded': {
        margin: '0px',
        '&:last-of-type': {
          marginBottom: '78px',
        }
      },
      '&:last-of-type': {
        borderBottom: '2px solid #4C81C7',
        marginBottom: '78px',
        borderRadius: '0px',
      },
    },
    accordionLabel: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '30px',
      color: '#4C81C7',
    },
    accordionLabelContainer: {
      padding: '0px',
      borderBottom: '1px solid #EEEEEE',
      minHeight: '90px',
      '&.Mui-expanded': {
        borderBottom: '0px',
        minHeight: '90px',
      },
      '& .MuiAccordionSummary-content': {
        display: 'flex',
        margin: '0px',
      }
    },
    accordionLabelContentWrapper: {
      paddingBottom: '6px',
      paddingRight: '15px',
      paddingLeft: '56px',
    },
    accordionContent: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '25px',
      textAlign: 'justify',
      color: '#06283D',
    },
    accordionContentContainer: {
      padding: '23px 56px',
      paddingTop: '0px',
    },
    footerContainer: {
      height: '190px',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/FAQFooter.png'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '46px 16px',
    },
    footerContent: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '35px',
      textAlign: 'center',
      color: '#DFF6FF',
    },
    buttonWrapper: {
      textAlign: 'center',
      marginTop: '23px',
    },
    getStartedButtonSx: {
      width: '151px',
      height: '41px',
      background: 'rgba(76, 129, 199, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      borderRadius: '20px',
      textTransform: 'none',
    },
    getStartedTextSx: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '26px',
      color: '#FFFFFF',
    },
  }
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: FaqPanel) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    if (panel !== expanded) {
      setExpanded(panel);
    } else {
      setExpanded(false);
    }
  };
  const contents = [
    {
      panelNumber: FaqPanel.FIRST,
      label: 'What are the benefits of ETC Services versus doing my own sourcing of candidate?',
      content: 'A lot of time and work will be invested if you do your own sourcing, recruiting, and hiring staff. Whereas, in ETC Services Group, we will handle thorough pre-screening of candidates, reference checks, and onboarding. We will also take care of payroll and HR requirements.',
    },
    {
      panelNumber: FaqPanel.SECOND,
      label: 'How will ETC Services find the best candidate that I need?',
      content: "With our highly trained and experienced recruiters, we will have access to a large pool of applicants where we will be able to choose the best candidates for you. Our recruiters will already conduct check references before they even give you the candidate's resume for review, making sure that they have the right skillset and provide you with the highest level of performance.",
    },
    {
      panelNumber: FaqPanel.THIRD,
      label: 'How soon can a contractor start?',
      content: 'They can be ready for their shift at least 2 days AFTER you have signed and returned the Agreement and have paid the initial payment so that we can set up their time-tracking software.',
    },
    {
      panelNumber: FaqPanel.FOURTH,
      label: 'Who manages my virtual staff ?',
      content: 'You will fully manage your staff day-to-day, just as you manage your local team. Your staff will adhere to your policies and guidelines and work on the tasks and duties assigned by you.',
    },
    {
      panelNumber: FaqPanel.FIFTH,
      label: 'How can I manage my staff remotely?',
      content: 'ETC Services will provide you with access to an Employee Monitoring Software where you can track the work being performed. This will provide you with more visibilty and transparency over your remote team.',
    },
    {
      panelNumber: FaqPanel.SIXTH,
      label: 'How do I know that staff are using their hours productively?',
      content: "All staff are required to use the time tracking software which they need to log in at the start of each shift and log out when they are finished working for the day. This software will also monitor your staff's activity and it can take a screen shot of their desktop every 10minutes.",
    },
    {
      panelNumber: FaqPanel.SEVENTH,
      label: 'Is there a cost to use time tracking ?',
      content: 'Our time tracking and task management tools can be used for FREE.',
    },
  ]
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.headerContainer}>
        <Box sx={{transform: 'scaleX(-1)'}}>
          <Typography component='span' sx={styles.headerContent}>FAQ</Typography>
          <Typography component='span' sx={{...styles.headerContent, color: '#DFF6FF'}}>.</Typography>
        </Box>
      </Box>
      <Box sx={styles.faqLabelContainer}>
        <Typography component='span' sx={styles.faqLabel}>Frequently Asked Questions</Typography>
        <Typography component='span' sx={styles.faqLabelContent}>How can we help you? Find the answers to the commonly raised questions.</Typography>
      </Box>
      <Box sx={styles.faqContainer}>
        {contents.map((content) => {
          return (
            <Accordion expanded={expanded === content.panelNumber} onChange={handleChange(content.panelNumber)} sx={styles.accordionRoot}>
              <AccordionSummary sx={styles.accordionLabelContainer}>
                <Box sx={styles.accordionLabelContentWrapper}>
                  <Box>
                    {expanded === content.panelNumber
                    ?
                      <Typography component='span' sx={{...styles.accordionLabel, fontSize: '30px', fontWeight: 500, position: 'absolute', left: '15px'}}>-</Typography>
                    :
                      <Typography component='span' sx={{...styles.accordionLabel, fontSize: '30px', fontWeight: 500, position: 'absolute', left: '15px'}}>+</Typography>
                    }
                  </Box>
                  <Box>
                    <Typography component='span' sx={styles.accordionLabel}>{content.label}</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={styles.accordionContentContainer}>
                <Typography sx={styles.accordionContent}>
                  {content.content}
                </Typography>
              </AccordionDetails>
            </Accordion>

          )
        })}
      </Box>
      <Box sx={styles.footerContainer}>
        <Typography component='span' sx={styles.footerContent}>What are you waiting for?</Typography>
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
  );
};

export default Faq;