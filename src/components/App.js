import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen0 from './Screen0';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Navbar from './Navbar';

export default function App () {
    const [movie_id, setMovie_id] = useState('');
    const [section_id, setSection_id] = useState('');
    const [request_info, setRequest_info] = useState({});

    return(
        <>
            {
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Screen0 setMovie_id={setMovie_id}/>}></Route>

                    <Route path="/sessoes/:movie_id" element={<Screen1 />}></Route>

                    <Route path="/assentos/:section_id" element={<Screen2 setRequest_info={setRequest_info} />}></Route>

                    <Route path="/sucesso" element={<Screen3 request_info={request_info} setRequest_info={setRequest_info}/>}></Route>

                </Routes>
            </BrowserRouter>
            }
        </>
 
        
    )
}