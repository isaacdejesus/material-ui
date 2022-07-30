import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainNavbarItems } from './consts/navbarItems';
const NavBar = () => {
    const drawerWidth = 220;
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((text, index) => (
            <ListItem button key={text.id} disablePadding>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default NavBar;
