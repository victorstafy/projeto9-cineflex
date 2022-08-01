import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen0 from './Screen0';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Navbar from './Navbar';

export default function App () {
    // const [screen, setScreen] = useState('/');
    const [movie_id, setMovie_id] = useState('');
    const [section_id, setSection_id] = useState('');
    const [seats_id, setSeats_id] = useState([]);

    const api_root_adress='https://mock-api.driven.com.br/api/v7/cineflex/movies';
    let api_movie_adress=`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movie_id}/showtimes`;
    let api_section_adress=`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${section_id}/seats`;

    return(
        <>
            {
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Screen0 setMovie_id={setMovie_id} />}></Route>

                    <Route path="/sessoes/:movie_id" element={<Screen1 setSection_id={setSection_id} />}></Route>

                    <Route path="/assentos/:section_id" element={<Screen2 seats_id={seats_id} setSeats_id={setSeats_id}/>}></Route>

                    <Route path="/sucesso" element={<Screen3 />}></Route>

                </Routes>
            </BrowserRouter>
            }
        </>
 
        
    )
}