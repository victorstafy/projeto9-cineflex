import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

// let movie_info;

function Section({ weekday,date,showtimes}) {
    return (
      <div className="buttons_template">
        <div className="button_1_title">
            {weekday}-{date}
        </div>
        {showtimes.map((value)=>(
            <Button 
            hour={value.name}
            page_link={`/assentos/${value.id}`}
            />))}
      </div>
    );
}

function Button({ hour, page_link}) {
    return (
        <>
        <Link to={page_link}>
            <div className="button_1"> 
                {hour}
            </div>
        </Link>
        </>
    );
}

export default function Screen1() {

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
                    />
                ))}
            </div>
            <Footer
            img_url={section_info.posterURL}
            movie_title={section_info.title}
            movie_time={''}
            />
        </>

)






}