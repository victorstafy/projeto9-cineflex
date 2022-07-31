import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen0 from './Screen0';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Navbar from './Navbar';

export default function App () {
    //Deve começar com false
    const [screen, setScreen] = useState(1);

    function switch_screen(scren_n) {
        setScreen(scren_n);
    }

    return(
        <>
            {
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Screen0 />}></Route>
                    <Route path="/sessoes" element={<Screen1 />}></Route>
                    <Route path="/assentos" element={<Screen2 />}></Route>
                    <Route path="/sucesso" element={<Screen3 />}></Route>
                </Routes>
            </BrowserRouter>
            }
        </>
 
        
    )
}