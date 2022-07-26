import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordion';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';
const Tour = () => {
    return (
        <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Welcome to Las Vegas
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img 
                src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180313182911-01-las-vegas-travel-strip.jpg" 
                alt="" 
                height={325}
            />
            <ImageCollage />
        </Box>
        <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="body1" component="p" marginTop={3}>
               I am a block of text.
               I am a block of text.
               I am a block of text.
               I am a block of text.
               I am a block of text.
               I am a block of text.
               I am a block of text.
        </Typography>
        </Box>
        <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently Asked Questions:
        </Typography>
        <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
        </Container>
    );
}
export default Tour;
