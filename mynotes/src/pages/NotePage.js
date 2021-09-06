import React from 'react'
import notes from '../assets/data'

const NotePage = ({ match }) => {

    let noteId = match.params.id
    let note = notes.find(note => note.id === Number(noteId))
    console.log(noteId)
    return (
        <div>
            {/* question mark prevents error when null I guess? */}
            <p>{note?.body}</p>
        </div>
    )
}

export default NotePage
