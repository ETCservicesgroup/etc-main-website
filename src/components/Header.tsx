import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Pages } from '../types/types';


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
    },
    menuIcon: {
      color: '#4C81C7',
      fontSize: '35px',
      marginTop: '7.5px',
      marginBottom: '7.5px',
    },
    headerLogo: {
      width: '135px',
      height: '50px',
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
        borderBottom: '1px solid rgba(238, 238, 238, 0.5);'
      },
      "& .MuiList-root": { 
        paddingTop: '13px',
        paddingBottom: '19px',
      },

    },
    menuItemLabel: {
      color: '#DFF6FF',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '21px',
    }
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
      <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="ETC Services Logo" style={styles.headerLogo}></img>
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
          horizontal: 'right',
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
          }}
        >
          <span style={styles.menuItemLabel}>Home</span>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.SERVICES);
            handleClose(e);
          }}
        >
          <span style={styles.menuItemLabel}>Services</span>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.WHY_US);
            handleClose(e);
          }}
        >
          <span style={styles.menuItemLabel}>Why Us</span>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.HOW_IT_WORKS);
            handleClose(e);
          }}
        >
          <span style={styles.menuItemLabel}>How it Works</span>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.FAQ);
            handleClose(e);
          }}
        >
          <span style={styles.menuItemLabel}>FAQ</span>
        </MenuItem>
        <MenuItem
          onFocus={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setVisiblePage(Pages.CONTACT_US);
            handleClose(e);
          }}
        >
          <span style={styles.menuItemLabel}>Contact Us</span>
        </MenuItem>
      </Menu>
    </Box>
    </>
  );
}

export default Header;