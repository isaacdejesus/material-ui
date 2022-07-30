import {Box, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar} from '@mui/material';
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useNavigate, useLocation} from 'react-router-dom';
import {MenuItem} from '../types';
import {format} from 'date-fns';
const Layout = ({children}: any) => {
    const drawerWidth = 240;
    const styles = {
        page: {
            background: '#f9f9f9',
            width: '100%',
            mt: 4 
        },
        drawer: {
            width: drawerWidth,
        ".MuiDrawer-paper": {
            width: drawerWidth,
        },
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            background: 'white',
            color: "black"
        },
        toolbar: (theme: any)=> theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: 2
        }
    }
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectIcon color="secondary"/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlinedIcon color="secondary"/>,
            path: '/create'
        }
    ]
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Box sx= {styles.root}>
            <AppBar 
                sx={styles.appbar}
                elevation={0}
            >
                <Toolbar> 
                    <Typography sx={styles.date}>
                        Today is the {format(new Date(), 'do MMMM Y')} 
                    </Typography>
                    <Typography>
                        Joe
                    </Typography>
                    <Avatar src="/joe.jpg" sx={styles.avatar}/>
                </Toolbar>
            </AppBar>
            <Drawer 
                sx={styles.drawer} 
                variant="permanent"
                anchor="left"
            >
            <Box>
                    <Typography variant="h5">
                        Notesss
                    </Typography>
            </Box>
            <List>
                {menuItems.map((item: MenuItem)=> (
            <ListItem 
                button
                key={item.text}
                onClick={()=> navigate(item.path)}
                sx={location.pathname == item.path ? styles.active : null}
            >
               <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
            </ListItem>
        ))}
            </List>
            </Drawer>
            <Box sx={styles.page}>
                <Box sx={styles.toolbar}></Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;
