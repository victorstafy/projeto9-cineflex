import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Screen0({screen,setScreen,movie_id,setMovie_id,api_root_adress}) {

    // useEffect(() => {
    //     const promise = axios.get(
    //       {api_root_adress}
    //     );
    
    //     promise.then((res) => {
    //       setImage(res.data);
    //     });
    //   }, []);


    return(
        
        <>
            <div className="top_title">
                Selecione o Filme
            </div>
            <div className="content_screen_0">
                Iniciar Recall!
            </div>
        </>

        // <Link to="/add-image" onClick={() => setClicked(!clicked)}>
        // <AddButton clicked={clicked}>+</AddButton>
        // </Link>

    )
}