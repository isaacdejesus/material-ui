import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import {FormControlLabel, makeStyles} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const styles = {
        fields: {
            marginTop: 2,
            marginBottom: 2 ,
            display: 'block'
        }
    }
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setTitleError(false);
        setDetailsError(false);
        if(title == ''){
            setTitleError(true);
        }
        if(details == ''){
            setDetailsError(true);
        }
        if( title && details ){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({title, details, category})
            }).then(()=> navigate('/'))
        }

    }
    return(
        <div>
            <Typography 
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            > 
                Create a new Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                onChange={(e) => setTitle(e.target.value)}
                sx={styles.fields}
                label="Note Title"
                variant="outlined" 
                color="secondary"
                fullWidth
                required
                error={titleError}
            />
            <TextField
                onChange={(e) => setDetails(e.target.value)}
                sx={styles.fields}
                label="Details"
                variant="outlined" 
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
            />
            <FormControl sx={styles.fields}>
            <FormLabel > Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel value="money" control={<Radio />} label="Money"/>
                <FormControlLabel value="todos" control={<Radio />} label="Todos"/>
                <FormControlLabel value="reminders" control={<Radio />} label="Reminders"/>
                <FormControlLabel value="work" control={<Radio />} label="Work"/>
            </RadioGroup>
            </FormControl>
            <Button 
                //onClick={()=> console.log("i was clicked") }
                type="submit"
                color="secondary"
                variant="contained"
                //startIcon={<SendIcon />}
                endIcon={ <KeyboardArrowRightIcon /> }
                //sx={{fontSize: 60, backgroundColor: 'violet'}}
                //sx={styles.btn}
            > 
               Submit
            </Button>
            </form>
        </div>
    )
}

export default Create;
