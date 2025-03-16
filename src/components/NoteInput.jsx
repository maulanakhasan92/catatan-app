import React from "react";
import PropTypes from 'prop-types';
import {BsCheckLg } from 'react-icons/bs';

//

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeHandler(event){
        this.setState(() => {
            return{
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                <input className="add-new-page__input__title" type="text" placeholder="Tulis Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                <textarea className="add-new-page__input__body" type="text" placeholder="Tulis Catatanmu disini" value={this.state.body} onChange={this.onBodyChangeHandler} required/>
                <div className=".add-new-page__action">
                    <button className="action" type="submit"><BsCheckLg/></button>
                </div>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;