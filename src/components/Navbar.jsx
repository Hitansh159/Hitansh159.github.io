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
        
        {/* <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Achivements
          </ListItemButton>
        </ListItem> */}
        
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
        
        {/* <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/xyz.html" target='_blank'>
            XYZ
          </ListItemButton>
        </ListItem> */}
        
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="https://medium.com/@hkd159" target='_blank'>
            Blogs
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

