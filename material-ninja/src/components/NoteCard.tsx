import {Typography, Card, CardHeader, CardContent, IconButton, Avatar} from '@mui/material';
import {Note, functionProps } from '../types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { yellow, green, pink, blue} from '@mui/material/colors';
const NoteCard = ({note, handleDelete}: {note: Note, handleDelete: functionProps}) => {
    const styles = {
        avatar: {
            backgroundColor: (note: any) => {
                if(note.category == 'work')
                    return yellow[700]
                if(note.category == 'money')
                    return green[500]
                if(note.category == 'todo')
                    return pink[700]
                return blue[500]
            }
        }
    }
    const ylow = yellow[700];
    const grn = green[500];
    const bl = blue[500];
    const pnk = pink[500];
    return(
        <Card elevation={2}>
            <CardHeader 
        avatar={
            <Avatar sx={{backgroundColor: note.category === 'work' ? ylow : note.category === 'money' ? grn : note.category === 'todos' ? pnk : bl
            }}>
                {note.category[0].toUpperCase()}
            </Avatar>
        }
                action={
                    <IconButton onClick={()=>handleDelete(note.id) }>
                        <DeleteOutlineIcon />
                    </IconButton>
                } 
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard;
