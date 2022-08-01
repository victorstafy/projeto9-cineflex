import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function Image({ url, name, id, setMovie_id }) {
    return (
      <div className="content_screen_0_cont">
        <Link to={`/sessoes/${id}`}>
          <img src={url} onClick={() => setMovie_id(id)}/>
        </Link>
      </div>
    );
  }

export default function Screen0({setMovie_id}) {

    const [images, setImages] = useState([]);
    useEffect(() => {
        const promise = axios.get(  
        'https://mock-api.driven.com.br/api/v7/cineflex/movies'
        );
    
        promise.then((res) => {
            setImages(res.data);
        });
      }, []);


    return(
        <>
            <div className="top_title">
                Selecione o Filme
            </div>
            <div className="content_screen_0">
                {images.map((value) => (
                <Image
                    url={value.posterURL}
                    name={value.title}
                    id={value.id}
                    setMovie_id={setMovie_id}
                />
                ))}
            </div>
        </>
    )
}