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
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const pages = ['about', 'expirence', "projects", "skills", "Achivemnets", "Speaker At", "Contact Me"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null); 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* NavBar Title  */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              textAlign:'left'
            }}
          >
            Hitansh Doshi
          </Typography>

          {/* This is for phone/small screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
              {pages.map((page) => (
                <MenuItem key={page} component="a" href={`#${page}`} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hitansh Doshi
          </Typography>

          <Divider orientation="vertical" variant="middle" flexItem sx={{mr:2,               display: { xs: 'none', md: 'flex' },
}} />
{/* This is for PC/Big Screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page}`}
                sx={{ my: 2, color:"black", display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}


/*
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

export default function NavBar() {
  return (

    
    <Box component="nav" aria-label="NavNar" sx={{ flexGrow: 1, padding:"5px 0",boxShadow:"0px 2px 7px 3px gray", position:"sticky", top:0, left:0, background:"white", zIndex:"100"}} >
      <List role="menubar" orientation="horizontal">
        <ListItem role="heading" sx={{ fontSize: '25px' }} component="a" href='/'>
            Hitansh Doshi
        </ListItem>
        
        <ListDivider />
        

        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#about">
            About
          </ListItemButton>
        </ListItem>
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#expirence">
            Experience
          </ListItemButton>
        </ListItem>
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#project">
            Projects
          </ListItemButton>
        </ListItem>
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#skill">
            Skills
          </ListItemButton>
        </ListItem>
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Achivements
          </ListItemButton>
        </ListItem> 
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#speaker">
            Speaker At
          </ListItemButton>
        </ListItem>
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#contact">
            Contact Me
          </ListItemButton>
        </ListItem>
        
        <ListDivider/>
        
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="https://medium.com/@hkd159" target='_blank'>
            Blogs
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

*/