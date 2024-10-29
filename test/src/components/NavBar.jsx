import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { MenuItem } from '@mui/material';
import logo from '../assets/imgaes/logo.png';

const pages = ['Home', 'About us', 'Wholesales', 'Service', 'News', 'How it works'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState(pages[0]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageChange = (page) => {
    setActivePage(page); 
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F2FBFF', boxShadow: 'none' , borderRadius:'50px 50px 0px 0px' }}>
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageChange(page)}>
                  <Typography sx={{ textAlign: 'center', color: '#333333' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: { xs: 'flex-end', md: 'center' },
            alignItems: 'center'
          }}>
           
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.slice(0, 3).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  sx={{
                    color:'#333333',
                    display: 'block',
                    px: 2, 
                    mx: 1,
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "20px",
                    position: 'relative',
                    '&::after': activePage === page ? {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: '-2px',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'green',
                    } : {},
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#333333',
                textDecoration: 'none',
                mx: 2,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Box sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img src={logo} alt="" />
              </Box>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.slice(3).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  sx={{
                    color: '#333333', 
                    display: 'block',
                    px: 2,
                    mx: 1, 
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "20px",
                    position: 'relative',
                    '&::after': activePage === page ? {
                      content: '""',
                      position: 'absolute',
                      left: '50%',
                      bottom: '-2px',
                      transform: 'translateX(-50%)',
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'green',
                    } : {},
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
              <img src={logo} alt="" />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
