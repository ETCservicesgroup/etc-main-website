import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


//@ts-ignore
function Header(props) {
  const styles = {
    headerContainer: {
      height: '65px',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '7.5px',
      paddingBottom: '7.5px',
      paddingRight: '30px',
      paddingLeft: '16px',
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
    }
  }

  return (
    <Box sx={styles.headerContainer}>
      <img src={process.env.PUBLIC_URL + '/assets/Logo.png'} alt="ETC Services Logo" style={styles.headerLogo}></img>
      <MenuIcon sx={styles.menuIcon}/>
    </Box>
  );
}

export default Header;