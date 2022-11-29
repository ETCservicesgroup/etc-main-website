import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Pages } from '../types/types';
import { theme } from '..';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


interface IHeaderProps {
  setVisiblePage: Function,
  visiblePage: string,
}

function Header(props: IHeaderProps) {
  const { setVisiblePage, visiblePage } = props;
  const styles = {
    headerContainer: {
      position: 'sticky',
      top: 0,
      zIndex: 999,
      height: '65px',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '7.5px',
      paddingBottom: '7.5px',
      paddingRight: '30px',
      paddingLeft: '16px',
      backgroundColor: 'white',
      [theme.breakpoints.up('md')]: {
        height: '100px',
      },
      [theme.breakpoints.up('lg')]: {
        position: 'static',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '200px',
        paddingRight: '200px',
      },
    },
    menuIcon: {
      color: '#4C81C7',
      fontSize: '35px',
      marginTop: '7.5px',
      marginBottom: '7.5px',
      [theme.breakpoints.up('md')]: {
        fontSize: '50px',
      },
    },
    headerLogo: {
      width: '100%',
      height: '100%',
    },
    logoContainer: {
      width: '135px',
      height: '50px',
      cursor: 'pointer',
      [theme.breakpoints.up('md')]: {
        height: '80px',
        width: '220px',
      },
    },
    hamburgerMenu: {
      "& .MuiMenu-paper": { 
        width: '100vw',
        backgroundColor: '#06283D',
      },
      "& .MuiMenuItem-root": { 
        paddingRight: '0px',
        paddingLeft: '0px',
        marginRight: '16px',
        marginLeft: '16px',
        borderBottom: '1px solid rgba(238, 238, 238, 0.5);',
        paddingTop: '20px',
        paddingBottom: '20px',
      },
      "& .MuiList-root": { 
        paddingTop: '13px',
        paddingBottom: '19px',
      },

    },
    menuItemLabelWrapper: {
      color: '#DFF6FF',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '21px',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },
    menuIconWrapper: {
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    contactUsContainer: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
      },
    },
    contactNumberContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    iconLabel: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '20px',
      color: '#4C81C7',
      textTransform: 'lowercase',
    },
    buttonLabel: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '20px',
      textTransform: 'lowercase',
    },
    contactUsIcon: {
      color: '#4C81C7',
      fontSize: '30px',
      marginRight: '16px',
    },
    emailIcon: {
      fontSize: '30px',
      marginRight: '6.5px'
    },
    contactUsText: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '26px',
      color: '#4C81C7',
    },
    contactUsTextContainer: {
      borderRight: '2px solid #4C81C7',
      marginTop: '7.5px',
      marginBottom: '7.5px',
      paddingRight: '12px',
      marginRight: '18px',
    },
    contactUsButtonsContainer: {
      marginTop: '7.5px',
      marginBottom: '7.5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    getStartedButtonSx: {
      background: '#DFF6FF',
      border: '1px solid rgba(76, 129, 199, 0.5)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      padding: '0px 5px',
      color: '#4C81C7',
      '&:hover': {
        backgroundColor: '#4C81C7',
        color: '#DFF6FF',
      },
    },
    navBar: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        height: '60px',
        background: '#06283D',
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: '200px',
        paddingRight: '200px',
      },
    },
    navBarLinkContainer: {
      width: '20%',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#DFF6FF',
      '&:hover': {
        color: '#47B5FF',
      }
    },
    navBarLink: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '26px',
    },
  }

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);
  const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuAnchorEl(null);
  };

  return (
    <>
    {/* @ts-ignore */}
    <Box sx={styles.headerContainer}>
      <Box 
        sx={styles.logoContainer}
        onClick={(e) => {
          e.stopPropagation();
          setVisiblePage(Pages.HOME);
          handleClose(e);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="ETC Services Logo" style={styles.headerLogo}></img>
      </Box>
      <IconButton 
      onClick={((e) => {
        setMenuAnchorEl(e.currentTarget.parentElement);
      })}
      sx={styles.menuIconWrapper}
      >
        <MenuIcon sx={styles.menuIcon}/>
      </IconButton>
      <Box sx={styles.contactUsContainer}>
        <Box sx={styles.contactUsTextContainer}>
          <Typography component='span' sx={styles.contactUsText}>
          Contact Us
        </Typography>
        </Box>
        <Box sx={styles.contactUsButtonsContainer}>
          <Box sx={styles.contactNumberContainer}>
              <CallIcon sx={styles.contactUsIcon}/>
              <Typography component='span' sx={styles.iconLabel}>+63 917 1624539</Typography>
          </Box>
          <Button 
          variant='contained' 
          sx={styles.getStartedButtonSx} 
          onClick={(e) => {
            setVisiblePage(Pages.CONTACT_US);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}>
            <EmailIcon sx={styles.emailIcon}/>
            <Typography component='span' sx={styles.buttonLabel}>info@etcservices.com</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
    <Box sx={styles.navBar}>
      <Box 
        sx={styles.navBarLinkContainer}
        onClick={(e) => {
          setVisiblePage(Pages.HOME);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <Typography component='span' sx={(visiblePage===Pages.HOME) ? {...styles.navBarLink, color: '#47B5FF'} : styles.navBarLink}>Home</Typography>
      </Box>
      <Box 
        sx={styles.navBarLinkContainer}
        onClick={(e) => {
          setVisiblePage(Pages.SERVICES);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <Typography component='span' sx={(visiblePage===Pages.SERVICES) ? {...styles.navBarLink, color: '#47B5FF'} : styles.navBarLink}>Services</Typography>
      </Box>
      <Box 
        sx={styles.navBarLinkContainer}
        onClick={(e) => {
          setVisiblePage(Pages.WHY_US);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <Typography component='span' sx={(visiblePage===Pages.WHY_US) ? {...styles.navBarLink, color: '#47B5FF'} : styles.navBarLink}>Why Us</Typography>
      </Box>
      <Box 
        sx={styles.navBarLinkContainer}
        onClick={(e) => {
          setVisiblePage(Pages.HOW_IT_WORKS);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <Typography component='span' sx={(visiblePage===Pages.HOW_IT_WORKS) ? {...styles.navBarLink, color: '#47B5FF'} : styles.navBarLink}>How it Works</Typography>
      </Box>
      <Box 
        sx={styles.navBarLinkContainer}
        onClick={(e) => {
          setVisiblePage(Pages.FAQ);
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        <Typography component='span' sx={(visiblePage===Pages.FAQ) ? {...styles.navBarLink, color: '#47B5FF'} : styles.navBarLink}>FAQ</Typography>
      </Box>
    </Box>
    <Box>
      <Menu
        anchorEl={menuAnchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        onClose={handleClose}
        onMouseDown={(event) => { event.stopPropagation(); }}
        onFocus={(e) => {
          e.stopPropagation();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        sx={styles.hamburgerMenu}
      >
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.HOME);
            handleClose(e);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
        >
          <Box sx={styles.menuItemLabelWrapper}>
            <span>Home</span>
          </Box>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.SERVICES);
            handleClose(e);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
        >
          <Box sx={styles.menuItemLabelWrapper}>
            <span>Services</span>
          </Box>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.WHY_US);
            handleClose(e);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
        >
          <Box sx={styles.menuItemLabelWrapper}>
            <span>Why Us</span>
          </Box>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.HOW_IT_WORKS);
            handleClose(e);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
        >
          <Box sx={styles.menuItemLabelWrapper}>
            <span>How it Works</span>
          </Box>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.FAQ);
            handleClose(e);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
        >
          <Box sx={styles.menuItemLabelWrapper}>
            <span>FAQ</span>
          </Box>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.CONTACT_US);
            handleClose(e);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
        >
          <Box sx={styles.menuItemLabelWrapper}>
            <span>Contact Us</span>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
    </>
  );
}

export default Header;