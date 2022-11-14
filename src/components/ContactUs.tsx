import { Box, Button, Input, Typography } from "@mui/material";

const ContactUs = () => {
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
      lineHeight: '30px',
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
    }
  };

  return (
    <>
    <Box sx={styles.headerContainer}>
      <Box sx={styles.headerContentWrapper}>
        <Typography component='span' sx={styles.headerLabel}>Contact</Typography>
        <Typography component='span' sx={{...styles.headerLabel, color: '#DFF6FF'}}> Us.</Typography>
        <Typography component='p' sx={styles.headerContent}>Send us any questions, tips or advice you need. Take advantage of our customer support option.</Typography>
      </Box>
    </Box>
      <Box sx={styles.formContainerWrapper}>
        <Typography component='span' sx={styles.formLabel}>Please fill in the form and we will be in touch soon.</Typography>
        <Box component='form' sx={styles.formContaier}>
          <Input id="firstName" placeholder='First Name' sx={{...styles.input, marginRight: '5%'}}/>
          <Input id="lastName" placeholder='Last Name' sx={styles.input}/>
          <Input id="email" placeholder='Email' sx={{...styles.input, marginRight: '5%'}}/>
          <Input id="contactNumber" placeholder='Contact Number' sx={styles.input}/>
          <Input id="companyName" placeholder='Company Name' sx={styles.input}/>
          <Input id="subject" placeholder='Subject' sx={{...styles.input, width: '100%', maxWidth: '100%'}}/>
          <Input id="subject" placeholder='Leave us a message here' sx={{
            ...styles.input,
            width: '100%', 
            maxWidth: '100%',
            height: '',
            maxHeight: '',
            marginBottom: '18px',
            lineHeight: '20px',
            }}
            multiline
          />
          <Box sx={styles.buttonWrapper}>
            <Button variant='contained' sx={styles.getStartedButtonSx}>
              <Typography component='span' sx={styles.getStartedTextSx}>
                Submit
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;