import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyleSharp } from '@mui/icons-material';


//@ts-ignore
function Header(props) {
  const styles = {
    headerContainer: {
      height: '65px',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingRight: '30px',
      paddingLeft: '30px',
    },
    menuIcon: {
      color: '#4C81C7',
      fontSize: '35px',
    },
  }

  return (
    <Box sx={styles.headerContainer}>
      <span>ETC LOGO</span>
      <MenuIcon sx={styles.menuIcon}/>
    </Box>
  );
}

export default Header;