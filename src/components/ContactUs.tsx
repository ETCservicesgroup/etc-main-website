import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import { Pages } from "../types/types";

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
      paddingTop: '45px',
    },
    headerContentWrapper: {
    },
    headerLabel: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '65px',
      color: '#47B5FF',
    },
    headerContent: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '25px',
      color: '#DFF6FF',
    },
    formContainerWrapper: {
      padding: '25px 15px',
      textAlign: 'center',
      paddingBottom: '35px',
      borderBottom: '1px solid #EEEEEE',
    },
    formLabel: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '30px',
      color: '#06283D',
    },
    formContaier: {
      background: '#06283D',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      textAlign: 'left',
      padding: '19px',
    },
    input: {
      backgroundColor: '#EEEEEE',
      border: '0.5px solid #06283D',
      borderRadius: '10px',
      width: '47.5%',
      height: '24px',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '10px',
      paddingLeft: '13px',
      paddingRight: '13px',
      maxWidth: '47.5%',
      marginBottom: '15px',
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

    },
    getStartedTextSx: {
      fontWeight: 700,
      fontSize: '16px',
    },
    interestedTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '31px',
      textAlign: 'center',
      marginBottom: '13px',
    },
    interestedText: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#000000',
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
    },
    iconLabel: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '15px',
      color: '#000000',
    },
    contactUsCardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '35px',
    },
    imagesContainer: {
      width: '255px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    image: {
      borderRadius: '10px',
      width: '79px',
      height: '316px',
    },
    imagesContainerWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '65px',
    },
    formSentImage: {
      width: '358px',
    },
    formSentLabel: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '30px',
      lineHeight: '45px',
      textAlign: 'center',
      color: '#4C81C7',
    },
    formSentContent: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '30px',
      textAlign: 'center',
      color: '#06283D',
      marginBottom: '56px',
    },
    formSentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '25px',
      marginBottom: '78px',
    },
  };
  const { setVisiblePage } = props;
  const form = React.useRef<null | HTMLFormElement>();
  const [formSent, setFormSent] = React.useState<boolean>(false);

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
    <>
      <Box sx={styles.formContainerWrapper}>
        <Typography component='span' sx={styles.formLabel}>Please fill in the form and we will be in touch soon.</Typography>
        <Box component='form' sx={styles.formContaier} ref={form}>
          <Input id="firstName" placeholder='First Name' name='user_fname' sx={{...styles.input, marginRight: '5%'}}/>
          <Input id="lastName" placeholder='Last Name' name='user_lname' sx={styles.input}/>
          <Input id="email" placeholder='Email' name='user_email' sx={{...styles.input, marginRight: '5%'}}/>
          <Input id="contactNumber" placeholder='Contact Number' name='user_contact' sx={styles.input}/>
          <Input id="companyName" placeholder='Company Name' name='user_company' sx={styles.input}/>
          <Input id="subject" placeholder='Subject' name='user_subject' sx={{...styles.input, width: '100%', maxWidth: '100%'}}/>
          <Input id="message" placeholder='Leave us a message here' name='user_message' sx={{
            ...styles.input,
            width: '100%', 
            maxWidth: '100%',
            height: '',
            maxHeight: '',
            marginBottom: '18px',
            }}
            multiline
          />
          <Box sx={styles.buttonWrapper}>
            <Button variant='contained' sx={styles.getStartedButtonSx} onClick={sendEmail}>
              <Typography component='span' sx={styles.getStartedTextSx}>
                Submit
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.interestedTextContainer}>
        <Typography component='span' sx={styles.interestedText}>Interested in working with us?</Typography>
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
      <Box sx={styles.imagesContainerWrapper}>
        <Box sx={styles.imagesContainer}>
          <Box component='img' sx={styles.image} src={process.env.PUBLIC_URL + 'assets/ManContactUs.png'}/>
          <Box component='img' sx={styles.image} src={process.env.PUBLIC_URL + 'assets/MaamContactUs.png'}/>
          <Box component='img' sx={styles.image} src={process.env.PUBLIC_URL + 'assets/LadyContactUs.png'}/>
        </Box>
      </Box>
    </>
    :
    <Box sx={styles.formSentContainer}>
      <Box component='img' sx={styles.formSentImage} src={process.env.PUBLIC_URL + 'assets/FormSent.png'}/>
      <Typography component='span' sx={styles.formSentLabel}>Thank you for providing us with your details</Typography>
      <Typography component='span' sx={styles.formSentContent}>A Representative will get in touch with you soon.</Typography>
      <Box sx={styles.buttonWrapper}>
        <Button variant='contained' sx={{...styles.getStartedButtonSx, width: '181px', height: '35px'}} onClick={handleClick}>
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