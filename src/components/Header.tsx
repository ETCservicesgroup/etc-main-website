import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Pages } from '../types/types';
import { theme } from '..';


interface IHeaderProps {
  setVisiblePage: Function,
}

function Header(props: IHeaderProps) {
  const { setVisiblePage } = props;
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
  }

  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);
  const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuAnchorEl(null);
  };

  return (
    <>
    <Box sx={styles.headerContainer}>
      <Box sx={styles.logoContainer}>
        <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="ETC Services Logo" style={styles.headerLogo}></img>
      </Box>
      <IconButton onClick={((e) => {
        setMenuAnchorEl(e.currentTarget.parentElement);
      })}>
        <MenuIcon sx={styles.menuIcon}/>
      </IconButton>
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