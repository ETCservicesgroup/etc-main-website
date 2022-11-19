import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
// import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import { Pages } from "../types/types";
import { theme } from "..";

interface IContactUsProps {
  setVisiblePage: Function,
}

const ContactUs = (props: IContactUsProps) => {
  const styles = {
    headerContainer: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/ContactUsHeader.png'})`,
      height: '200px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        height: '250px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '302px',
      },
    },
    headerContentWrapper: {
    },
    headerLabel: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '65px',
      color: '#47B5FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '75px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '70px',
      },
    },
    headerContent: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '25px',
      color: '#DFF6FF',
      [theme.breakpoints.up('md')]: {
        fontSize: '15px',
        lineHeight: '30px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: '21px',
        fontSize: '20px',
      },
    },
    formContainerWrapper: {
      padding: '25px 15px',
      textAlign: 'center',
      paddingBottom: '35px',
      maxWidth: '390px',
      [theme.breakpoints.up('md')]: {
        paddingTop: '31px',
        paddingBottom: '50px',
        textAlign: 'left',
        maxWidth: '598px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '0px',
        paddingRight: '30px',
        borderBottom: 'none',
      },
    },
    formLabelContainer:{
      [theme.breakpoints.up('md')]: {
        borderBottom: '1px solid #959595',
        marginBottom: '15px',
      },
    },
    formLabel: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '30px',
      color: '#06283D',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '30px',
      },
    },
    formContaier: {
      background: '#06283D',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      textAlign: 'left',
      padding: '19px',
      marginTop: '9px',
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
        paddingTop: '38px',
        paddingBottom: '27px',
        paddingRight: '43px',
        paddingLeft: '43px',
      },
    },
    input: {
      backgroundColor: '#EEEEEE',
      border: '0.5px solid #06283D',
      borderRadius: '10px',
      width: '47.5%',
      minHeight: '24px',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '10px',
      paddingLeft: '13px',
      paddingRight: '13px',
      maxWidth: '47.5%',
      marginBottom: '15px',
      [theme.breakpoints.up('md')]: {
        minHeight: '40px',
        fontSize: '14px',
        marginBottom: '20px',
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: '0px',
      },
      '&:after': {
        borderBottom: '0px',
      },
      '&:before': {
        borderBottom: '0px',
      },
    },
    buttonWrapper: {
      textAlign: 'center',
    },
    getStartedButtonSx: {
      background: 'rgba(76, 129, 199, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      borderRadius: '20px',
      textTransform: 'none',
      width: '130px',
      height: '35px',
      margin: '0 auto',
      '&.Mui-disabled': {
        background: 'rgba(76, 129, 199, 0.4)',
        color: 'rgba(255, 255, 255, 0.2)',
      },
      [theme.breakpoints.up('md')]: {
        width: '180px',
        height: '50px',
      },
    },
    getStartedTextSx: {
      fontWeight: 700,
      fontSize: '16px',
      [theme.breakpoints.up('md')]: {
        fontSize: '23px',
      },
    },
    interestedTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '31px',
      textAlign: 'center',
      marginBottom: '13px',
      [theme.breakpoints.up('md')]: {
        paddingTop: '55px',
        textAlign: 'left',
      },
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        padding: '0px',
        margin: '0px',
        marginBottom: '13px',
      },
    },
    interestedText: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
      whiteSpace: 'pre-wrap'
    },
    contactUsCard: {
      background: 'rgba(238, 238, 238, 0.8)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      width: '286px',
      height: '160px',
      padding: '22px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      [theme.breakpoints.up('md')]: {
        height: '177px',
        padding: '27px 22px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '100%',
        paddingTop: '22px',
        paddingBottom: '17px',
        paddingLeft: '14px',
        paddingRight: '14px',
      },
    },
    contactNumberContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    emailContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    addressContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    contactUsIcon: {
      color: '#4C81C7',
      fontSize: '25px',
      marginRight: '12px',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
    },
    iconLabel: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '15px',
      color: '#000000',
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
    },
    contactUsCardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '35px',
      [theme.breakpoints.up('md')]: {
        maxWidth: '305px',
        marginRight: '21px'
      },
      [theme.breakpoints.up('lg')]: {
        margin: '0px',
        marginBottom: '32px',
        maxWidth: '388px',
      },
    },
    imagesContainer: {
      width: '255px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.up('md')]: {
        width: '305px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '388px',
      },
    },
    image: {
      borderRadius: '10px',
      width: '79px',
      height: '316px',
      [theme.breakpoints.up('md')]: {
        height: '378px',
        width: '95px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '480px',
        width: '120px',
      },
    },
    imagesContainerWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '65px',
      [theme.breakpoints.up('md')]: {
        paddingTop: '55px',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '0px',
        padding: '0px',
      },
    },
    formSentImage: {
      width: '358px',
      [theme.breakpoints.up('lg')]: {
        width: '442px',
      },
    },
    formSentLabel: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '45px',
      textAlign: 'center',
      color: '#4C81C7',
      [theme.breakpoints.up('md')]: {
        fontSize: '35px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '45px',
      },
    },
    formSentContent: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '30px',
      textAlign: 'center',
      color: '#06283D',
      marginBottom: '56px',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: '20px',
        fontSize: '20px',
      },
    },
    formSentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '25px',
      marginBottom: '78px',
      paddingLeft: '14px',
      paddingRight: '14px',
      [theme.breakpoints.up('md')]: {
        paddingLeft: '18px',
        paddingRight: '18px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '32px',
        paddingRight: '32px',
      },
    },
    wrapper: {
      borderTop: '1px solid #EEEEEE',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '388px',
        borderTop: '0px',
        flexDirection: 'column',
        paddingTop: '46px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        padding: '32px',
        marginBottom: '54px',
        justifyContent: 'center',
      },
      [theme.breakpoints.up('xl')]: {
        paddingRight: '200px',
        paddingLeft: '200px',
      },
    }
  };
  const { setVisiblePage } = props;
  const form = React.useRef<null | HTMLFormElement>();
  const [formSent, setFormSent] = React.useState<boolean>(false);
  const [firstName, setFirstName] = React.useState<boolean>(false);
  const [lastName, setLastName] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<boolean>(false);
  const [contact, setContact] = React.useState<boolean>(false);
  const [company, setCompany] = React.useState<boolean>(false);
  const [subject, setSubject] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<boolean>(false);

  const setValue = (value: string, setState: Function) => {
    if (value) {
      setState(true);
    } else {
      setState(false);
    }
  }

  //@ts-ignore
  const sendEmail = (event) => {
    event.preventDefault();
    setFormSent(true);

    // emailjs.sendForm('service_7qqplwt', 'template_qkytlas', form.current!, 'JfoOguY9S6TK8_GG3')
    // .then((result) => {
    //     setFormSent(true);
    // }, (error) => {
    //     console.log(error.text);
    // });
  };
  const handleClick = () => {
    setVisiblePage(Pages.HOME);
  }

  return (
    <>
    <Box sx={styles.headerContainer}>
      <Box sx={styles.headerContentWrapper}>
        <Typography component='span' sx={styles.headerLabel}>Contact</Typography>
        <Typography component='span' sx={{...styles.headerLabel, color: '#DFF6FF'}}> Us.</Typography>
        <Typography component='p' sx={styles.headerContent}>Send us any questions, tips or advice you need. Take advantage of our customer support option.</Typography>
      </Box>
    </Box>
    {!formSent 
    ?
    // @ts-ignore
    <Box sx={styles.formContainer}>
      {/* @ts-ignore */}
      <Box sx={styles.formContainerWrapper}>
        <Box sx={styles.formLabelContainer}>
          <Typography component='span' sx={styles.formLabel}>Please fill in the form and we will be in touch soon.</Typography>
        </Box>
        <Box component='form' sx={styles.formContaier} ref={form}>
          <Input id="firstName" placeholder='First Name' name='user_fname' sx={{...styles.input, marginRight: '5%'}} onChange={ (event) => {setValue(event.target.value, setFirstName)} }/>
          <Input id="lastName" placeholder='Last Name' name='user_lname' sx={styles.input} onChange={ (event) => {setValue(event.target.value, setLastName)} }/>
          <Input id="email" placeholder='Email' name='user_email' sx={{...styles.input, marginRight: '5%'}} onChange={ (event) => {setValue(event.target.value, setEmail)} }/>
          <Input id="contactNumber" placeholder='Contact Number' name='user_contact' sx={styles.input} onChange={ (event) => {setValue(event.target.value, setContact)} }/>
          <Input id="companyName" placeholder='Company Name' name='user_company' sx={styles.input} onChange={ (event) => {setValue(event.target.value, setCompany)} }/>
          <Input id="subject" placeholder='Subject' name='user_subject' sx={{...styles.input, width: '100%', maxWidth: '100%'}} onChange={ (event) => {setValue(event.target.value, setSubject)} }/>
          <Input id="message" placeholder='Leave us a message here' name='user_message' sx={{
            ...styles.input,
            width: '100%', 
            maxWidth: '100%',
            minHeight: '160px',
            maxHeight: '160px',
            marginBottom: '18px',
            '& textarea': {
              padding: '0px',
              overflowY: 'scroll !important',
              fontSize: '10px',
              minHeight: '155px',
              maxHeight: '155px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '20px',
              [theme.breakpoints.up('md')]: {
                padding: '0px',
                minHeight: '330px',
                maxHeight: '330px',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: '30px',
              },
            },
            [theme.breakpoints.up('md')]: {
              minHeight: '335px',
              maxHeight: '335px',
              marginBottom: '25px',
            },
            }}
            multiline
            onChange={ (event) => {setValue(event.target.value, setMessage)} }
          />
          <Box sx={styles.buttonWrapper}>
            <Button variant='contained' sx={styles.getStartedButtonSx} onClick={sendEmail} disabled={!(firstName && lastName && email && contact && company && subject && message)}>
              <Typography component='span' sx={styles.getStartedTextSx}>
                Submit
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.wrapper}>
        <Box>
          {/* @ts-ignore */}
          <Box sx={styles.interestedTextContainer}>
            <Typography component='span' sx={styles.interestedText}>Interested in working with us? </Typography>
            <Typography component='span' sx={styles.interestedText}>You can also reach us at:</Typography>
          </Box>
          <Box sx={styles.contactUsCardContainer}>
            <Box sx={styles.contactUsCard}>
              <Box sx={styles.contactNumberContainer}>
                  <CallIcon sx={styles.contactUsIcon}/>
                  <Typography component='span' sx={styles.iconLabel}>+63 9171624539</Typography>
              </Box>
              <Box sx={styles.emailContainer}>
                  <EmailIcon sx={styles.contactUsIcon}/>
                  <Typography component='span' sx={styles.iconLabel}>info@etcservices.com</Typography>
              </Box>
              <Box sx={styles.addressContainer}>
                  <PlaceIcon sx={styles.contactUsIcon}/>
                  <Typography component='span' sx={styles.iconLabel}>Cainta, Rizal Philippines 1900</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.imagesContainerWrapper}>
          <Box sx={styles.imagesContainer}>
            <Box component='img' sx={styles.image} src={process.env.PUBLIC_URL + 'assets/ManContactUs.png'}/>
            <Box component='img' sx={styles.image} src={process.env.PUBLIC_URL + 'assets/MaamContactUs.png'}/>
            <Box component='img' sx={styles.image} src={process.env.PUBLIC_URL + 'assets/LadyContactUs.png'}/>
          </Box>
        </Box>
      </Box>
    </Box>
    :
    <Box sx={styles.formSentContainer}>
      <Box component='img' sx={styles.formSentImage} src={process.env.PUBLIC_URL + 'assets/FormSent.png'}/>
      <Typography component='span' sx={styles.formSentLabel}>Thank you for providing us with your details</Typography>
      <Typography component='span' sx={styles.formSentContent}>A Representative will get in touch with you soon.</Typography>
      <Box sx={styles.buttonWrapper}>
        <Button variant='contained' sx={{...styles.getStartedButtonSx,
          width: '181px',
          height: '35px',
          [theme.breakpoints.up('md')]: {
            width: '181px',
            height: '35px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '225px',
            height: '50px',
          },
          }} onClick={handleClick}>
          <Typography component='span' sx={styles.getStartedTextSx}>
            Go to Homepage
          </Typography>
        </Button>
      </Box>
    </Box>
    }
    </>
  );
};

export default ContactUs;