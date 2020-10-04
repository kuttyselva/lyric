import React from 'react'
import Loader from './yB.gif'
export default function Spinner() {
    return (
        <div>
            <img src={Loader} style={{width:'300px',margin:'40px auto',display:'block'}}alt="no"/>
            <h1 className="display-2">Sorry! check your keywords</h1>
        </div>
    )
}
