import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';



function Section({ weekday,date,showtimes ,setSessao_id}) {
    return (
      <div className="buttons_template">
        <div className="button_1_title">
            {weekday}-{date}
        </div>
        {showtimes.map((value)=>(
            <Button 
            hour={value.name}
            page_link={`/assentos/${value.id}`}
            section_id={value.id}
            setSessao_id={setSessao_id}
            />))}
      </div>
    );
}

function Button({ hour, page_link, section_id, setSessao_id}) {
    return (
        <>
        <Link to={page_link}>
            <div className="button_1" onClick={() => setSessao_id(section_id)}>
                {hour}
            </div>
        </Link>
        </>
    );
}

function Footer({img_url,movie_title}){
    console.log(img_url)
    return (
    <div className="footer">
        <div className="footer_img_back">
            <img src={img_url}/>
        </div>
        <div className="footer_title">
            {movie_title}
        </div>
    </div>
    )
}

export default function Screen1({setSessao_id}) {

    const [section_days_info, setSection_days_info] = useState([]);
    const [section_info, setSection_info] = useState([]);
    const { movie_id } = useParams();

    useEffect(() => {
        const promise = axios.get(  
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${movie_id}/showtimes`
        );
    
        promise.then((res) => {
            setSection_days_info(res.data.days);
            setSection_info(res.data)
        });
      }, []);

    // {console.log(setSection_info.posterURL)}
    return(
        <>
            <div className="top_title">
                Selecione o horário
            </div>
            <div className="content_screen_1">
                {section_days_info.map((value)=>(
                    <Section 
                    weekday={value.weekday}
                    date={value.date}
                    showtimes={value.showtimes}
                    setSessao_id={setSessao_id}
                    />
                ))}
            </div>
            <Footer
            img_url={section_info.posterURL}
            movie_title={section_info.title}
            />
        </>

)






}