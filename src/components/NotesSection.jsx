import React, { useState } from 'react'
import "../styles/NotesSection.css"

const NotesSection = ({ noteId, notesBgColor, setNotesBgColor, setNoteId, setActive, setVisible, groupName, setTextInput, setTextSlice, setTextBgColor }) => {

    const displayNotesName = () => setVisible(true);

    return (
        <div className='container' >
            <h3 className='heading'>Pocket Notes</h3>
            <div className='create-notes'>
                <button onClick={displayNotesName}><span className='plus-btn'>+</span></button>

                <div>
                    {groupName && groupName.map((note, idx) => {
                        return (
                            <div key={idx} style={{ backgroundColor: notesBgColor && noteId === idx ? '#F7ECDC' : '' }} className='notes' onClick={() => { console.log(idx); setNotesBgColor(true); setNoteId(idx); setActive(true); setTextInput(note.inputText); setTextSlice(note.inputText.slice(0, 2)); setTextBgColor(note.bgColor); }}>
                                <span style={{ backgroundColor: note.bgColor }}>{note.inputText.slice(0, 2)}</span>
                                <strong>{note.inputText}</strong>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default NotesSection;