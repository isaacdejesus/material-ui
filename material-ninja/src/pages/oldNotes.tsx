import {useEffect, useState} from 'react';
import {Grid, Paper, Container} from '@mui/material';
import NoteCard from '../components/NoteCard';
import {Note } from '../types';
const Notes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])
    const handleDelete = async (id: number) => {
        await fetch('http://localhost:8000/notes' + id, {
            method: 'DELETE'
        })
        const newNotes = notes.filter((note: Note) => note.id != id)
        setNotes(newNotes);
    }
    return(
        <Container>
        <Grid container spacing={3}>
        {notes.map((note: Note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}> 
                <NoteCard note={note} handleDelete={handleDelete}/>
            </Grid>
        ))}
        </Grid>
        </Container>
    )
}

export default Notes;
