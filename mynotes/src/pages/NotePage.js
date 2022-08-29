import React from 'react'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { useParams } from 'react-router-dom';


const NotePage = () => {
    let { noteId } = useParams();

//const NotePage = ({match}) => {
    //let noteId = match.params.id
    
    
        let note = notes.find(note => note.id=== Number(noteId))
    return (
        
        <div className="note">
            
            <div className="note-header">
            <h3>
                    <Link to="/" >
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage;