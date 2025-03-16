import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

function NoteItem({title, body, createdAt, id, onDelete}){
    return(
        
        <div className="note-item">
            <NoteItemBody title={<Link to={`/note/${id}`}>{title}</Link>} createdAt={createdAt} body={body}/>
            <br />
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NoteItem;