import React from "react";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote } from "../utils/api";
import { Link } from 'react-router-dom';
import {BsPlusLg } from 'react-icons/bs';
import PropTypes from "prop-types";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({keyword});
  }
 
  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: [],
            initializing: true,
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangehandler = this.onKeywordChangehandler.bind(this);

    }

    async onDeleteHandler(id){
        await deleteNote(id);

        const {data} = await getActiveNotes();
        this.setState(() => {
            return{
                notes: data,
            }
        });
    }

    onKeywordChangehandler(keyword){
        this.setState(() => {
            return{
                keyword
            }
        });
        this.props.keywordChange(keyword);
    }

    async componentDidMount() {
        const {data} = await getActiveNotes();

        this.setState(() => {
            return {
                notes: data,
                initializing: false
            }
        })
    }

    render(){
        const initializing = this.state.initializing;
        const notes = this.state.notes.filter((note) =>{
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
        if(initializing){
            return <p>Loading...</p>
        }
        
        return(
            <section>
                <h2>Daftar Catatan</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangehandler} />
                <NoteList notes={notes} onDelete={this.onDeleteHandler} />
                <div className="homepage__action">
                    <button className="action"><Link to="/add"><BsPlusLg/></Link></button>
                </div>
            </section>
        )
    }
}

HomePageWrapper.propTypes ={
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.string
}

export default HomePageWrapper;