import {useEffect, useState} from 'react';
import {Grid, Paper, Container} from '@mui/material';
import NoteCard from '../components/NoteCard';
import {Note } from '../types';
import Masonry from 'react-masonry-css';
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
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    return(
        <Container>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
        {notes.map((note: Note) => (
            <div key={note.id}> 
                <NoteCard note={note} handleDelete={handleDelete}/>
            </div>
        ))}
        </Masonry>
        </Container>
    )
}

export default Notes;
