import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Lyrics extends Component {
    state={
        track:{},
        lyrics:{}
    }
    componentDidMount(){
         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=> {console.log(res.data);
             this.setState({lyrics:res.data.message.body.lyrics});
             return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
             .then(res=>{this.setState({track:res.data.message.body.track});
             })
        })
        .catch(err=> console.log(err));
    }
    
    render() {
        const {track,lyrics}=this.state;
       if(track ===undefined || lyrics === undefined || Object.keys(track).length ===0 || Object.keys(lyrics).length ===0){
           return <Spinner/>;
       }
       else{
           return(
            <React.Fragment>
                {console.log(track)}
                <Link to="/" className="btn btn-dark btn-sm mb-4" style={{borderRadius:'20px'}}>Go Back</Link>
                <div className="card" style={{borderRadius:'20px'}}>
                    <div className="card-header">
                  <h2 className="display-4">{track.track_name} by <span className="text-secondary">{track.artist_name}</span></h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{lyrics.lyrics_body}</p>
                    </div>
                </div>

                <ul className="list-group mt-3" >
                    <li className="list-group-item">
                        <strong>Album Id</strong> : {track.album_id}
                    </li>
                    {track.primary_genres.music_genre_list.length ==0 ?<li className="list-group-item">
                        <strong>Song Genre</strong> : not found
                    </li>:
                <li className="list-group-item">
                <strong>Song Genre</strong> : {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
            </li>}
      
                    <li className="list-group-item">
                      <strong>Explicit Words</strong>:  {track.explict === 0? 'No':'Yes'}
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date</strong>: <Moment format="DD-MM-YYYY">{track.first_release_date}</Moment>
                    </li>
                </ul>
            </React.Fragment>
            );
       }
    
    }
}
export default Lyrics;