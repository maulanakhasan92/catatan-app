import React from "react";
import PropTypes from 'prop-types';

function NoteItemBody({title, createdAt, body}){
    return(
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__createdAt">{createdAt}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

NoteItemBody.propTypes = {
    title: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemBody;