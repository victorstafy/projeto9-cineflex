import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen0 from './Screen0';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Navbar from './Navbar';

export default function App () {
    const [screen, setScreen] = useState('/');
    const [movie_id, setMovie_id] = useState('');
    const [sessao_id, setSessao_id] = useState('');
    const [assentos_id, setAssentos_id] = useState('');

    const api_root_adress='https://mock-api.driven.com.br/api/v7/cineflex/movies';
    let api_movie_adress=`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movie_id}/showtimes`;
    let api_section_adress=`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessao_id}/seats`;

    return(
        <>
            {
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Screen0 screen={screen} setScreen={setScreen} 
                    movie_id={movie_id} setMovie_id={setMovie_id} api_root_adress={api_root_adress}/>}></Route>

                    <Route path="/sessoes:filmeId" element={<Screen1 screen={screen} setScreen={setScreen} 
                    movie_id={movie_id} setMovie_id={setMovie_id}  sessao_id={sessao_id} 
                    setSessao_id={setSessao_id} api_movie_adress={api_movie_adress}/>}></Route>

                    <Route path="/assentos:sessaoId" element={<Screen2 screen={screen} setScreen={setScreen} 
                    movie_id={movie_id} setMovie_id={setMovie_id}  sessao_id={sessao_id} 
                    setSessao_id={setSessao_id} api_section_adress={api_section_adress}/>}></Route>

                    <Route path="/sucesso" element={<Screen3 screen={screen} setScreen={setScreen} 
                    movie_id={movie_id} setMovie_id={setMovie_id}  sessao_id={sessao_id} 
                    setSessao_id={setSessao_id}  assentos_id={assentos_id} setAssentos_id={setAssentos_id} />}></Route>

                </Routes>
            </BrowserRouter>
            }
        </>
 
        
    )
}