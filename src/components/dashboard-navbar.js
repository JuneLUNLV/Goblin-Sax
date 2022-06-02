import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'

const pages = ['About Us','NFT Lending', "Request a Loan", 'Contact Us'];
const links = ["/#about_us","/#nft_lending","/#request_a_loan","/#contact_us"]

export const DashboardNavbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="fixed" sx={{boxShadow:"none"}}>
      <Container maxWidth="lg" sx={{width:{xs:'100%',md:'80%'},maxWidth:'1400px !important'}}>
        <Toolbar disableGutters>
        <Box sx={{
          cursor:'pointer',
          display: { xs: 'none', md: 'flex' },
        }}>
        <Image src="/static/logo.svg" height={100} width={150}/>
        </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page}>
                <a target={`${"_self"}`}  href={links[index]} rel="noopener noreferrer"  className="phoneNavLink">
                  <Typography textAlign="center">{page}</Typography>
                </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{
            cursor:'pointer',
            display: { xs: 'flex', md: 'none' }, 
            flexGrow: "1"
          }}>
          <Image src="/static/logo.svg" height={100} width={150}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: "flex-end"}}>
            {pages.map((page,index) => (
              <a target={`${"_self"}`} href={links[index]} rel="noopener noreferrer" key={page} className="navLink">
                <Button
                  sx={{ my: 2, color: 'white', display: 'block',fontSize:"var(--nav-bar-fontSize)",fontFamily: "var(--main-font)", color:"inherit"}}
                >
                  {page}
                </Button>
              </a>

            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
