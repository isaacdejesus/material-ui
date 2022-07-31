import {AppBar, Toolbar, styled, Box, Typography, InputBase, Badge, Avatar, } from '@mui/material';
import AttractionsIcon from '@mui/icons-material/Attractions';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});
const Search = styled("div") (({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",

}))
const Icons = styled(Box) (({theme}) => ({
    display: "none", 
    alignItems: "center", 
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))
const UserBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"}
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>SC</Typography>
                <AttractionsIcon sx={{display: {xs: "block", sm: "none"}}}/>
                <Search> <InputBase placeholder="search..."/></Search>
                <Icons> 
                    <Badge badgeContent={4} color="error">
                    <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{width: 30, height: 30}}src="https://cdn.mos.cms.futurecdn.net/fRpP8H8aAQH56RX7BaNc4M-970-80.jpg.webp"/>
                </Icons>
                <UserBox>
                    <Avatar sx={{width: 30, height: 30}}src="https://cdn.mos.cms.futurecdn.net/fRpP8H8aAQH56RX7BaNc4M-970-80.jpg.webp"/>
                    <Typography > John</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
