import React, { Component } from 'react'
import axios from 'axios';
import {Consumer} from '../../context'
export default class Search extends Component {
    state={
        trackTitle:''
    }
    formSubmit=(dispatch,e)=>{
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{dispatch({
            type:'SEARCH_TRACKS',
            payload:res.data.message.body.track_list
        });
        this.setState({trackTitle:''})
    })
}
    render() {
       
        return (
           <Consumer>
               {value=>{
                   const {dispatch}=value;
                   return (
                       <div className="card card-body mb-4 p-4" style={{borderRadius:'20px'}}>
                           <h1 className="display-4 text-center">
                               <i className="fas fa-music"></i>&nbsp;&nbsp;&nbsp;Search for a Song
                           </h1>
                           <p className="lead text-center">Get the lyrics for any song</p>
                                <form onSubmit={this.formSubmit.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" style={{borderRadius:'20px'}} placeholder="Song Lyric..." name="trackTitle"value={this.state.trackTitle} onChange={(e)=>{this.setState({trackTitle:e.target.value})}}/>
                                    </div>
                                    <button className="btn btn-dark btn-lg btn-block mb-5" style={{borderRadius:'20px'}}>Check Lyrics</button>
                                </form>
                       </div>
                   )
               }}
           </Consumer>
        )
    }
}
