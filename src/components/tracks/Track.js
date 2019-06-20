import React from 'react'
import {Link} from 'react-router-dom';

const Track = (props) => {
    const {track}=props;
    return (
        <div className="col-md-6" >
            <div className="card mb-4 shadow-sm" style={{borderRadius:'20px'}}>
                <div className="card-body">
                    <h4 className="text-center">{track.artist_name}</h4>
                    <hr/>
                    <p className="card-text"><strong><i className="fas fa-play"></i>Track</strong>:&nbsp;{track.track_name}</p>
                    <p className="card-text"><strong><i className="fas fa-compact-disc"></i>Album</strong>:&nbsp;{track.album_name}</p>
                    <hr/>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block" style={{borderRadius:'20px'}}>
                        <i className="fas fa-chevron-right" ></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track
