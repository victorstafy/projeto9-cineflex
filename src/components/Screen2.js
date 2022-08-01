import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

function Seat({isAvailable,isSelected,seat_n,select_seat,index}){
    return (
        <>
        {isAvailable ? ( isSelected ? (<div className="selected" onClick={()=>{ select_seat(seat_n,index) }}>
        {('0' + seat_n).slice(-2)}</div> ): 

        (<div className="available" onClick={()=>{ select_seat(seat_n,index) }}>
        {('0' + seat_n).slice(-2)}</div> ) ):  

        (<div className="occupied" onClick={()=>{alert('Esse assento não está disponível')}}>
        {('0' + seat_n).slice(-2)}</div>)}
        </>
    )
}

export default function Screen2({setRequest_info}) {

    const [all_data, setAll_data] = useState([]);
    const [seats_data, setSeats_data] = useState([]);
    const [seat_selected, setSeat_selected] = useState(Array(100).fill(false));
    const [seats_id, setSeats_id] = useState([]);
    const [name_user, setName_user] = useState("");
	const [cpf, setCpf] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const { section_id } = useParams();
    let seat_selected_copy;
    const success_link="/sucesso"

    useEffect(() => {
        const promise = axios.get(  
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${section_id}/seats`
        );
    
        promise.then((res) => {
            setAll_data(res.data);
            setSeats_data(res.data.seats)
        });
      }, []);

    useEffect(() => {
    setTimeout(() => {
        setIsDisplayed(true);
    }, 500);
    }, []);


    function select_seat(seat_n,index){
        seat_selected_copy=[...seat_selected];
        seat_selected_copy[index]=!seat_selected_copy[index];
        setSeat_selected(seat_selected_copy);
        if (seats_id.includes(seat_n)){
            setSeats_id(seats_id.filter((value,_) => value !== seat_n))
        }
        else{
            setSeats_id([...seats_id, seat_n])
        }
    }

    function send_request () {
        setRequest_info({
            seats_id:seats_id,
            name_user:name_user,
            cpf:cpf,
            movie:all_data.movie.title,
            day:all_data.day.date,
            hour:all_data.name,
        })
        // console.log(setRequest_info)

        const response = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
			ids: seats_id.map( (str) =>(Number(str)) ),
            name: name_user,
            cpf: cpf
    });
        console.log(seats_id)
        console.log(name_user)
        console.log(cpf)
        // promise.then(wite_request)
    }

    return(
        <>
            <div className="top_title">
                Selecione o(s) assentos
            </div>
            <div className="content_screen_2">
                <div className="seats">
                    {seats_data.map((value,index)=>(
                    <Seat 
                    isAvailable={value.isAvailable}
                    isSelected={seat_selected[index]}
                    seat_n={value.name}
                    select_seat={select_seat}
                    index={index}
                    />
                    ))}
                </div>
                <div className="seats_option">
                    <div className="seat_option_type">
                        <div className="selected"></div>
                        Selecionado
                    </div>
                    <div className="seat_option_type">
                        <div className="available"></div>
                        Disponível
                    </div>
                    <div className="seat_option_type">
                        <div className="occupied"></div>
                        Indisponível
                    </div>
                </div>  
                <form onSubmit={send_request}>
                    <label for="campoNome">Nome do comprador:</label>
                    <input type="text" placeholder="Digite seu nome..." id="campoNome" value={name_user} onChange={e => setName_user(e.target.value)} required/>
                    <label for="campoCpf">CPF do comprador:</label>
                    <input type="text" placeholder="Digite seu CPF..." id="campoCpf" value={cpf} onChange={e => setCpf(e.target.value)} 
                    data-inputmask="'mask': '9', 'repeat': 10, 'greedy' : false" required/>
                    <Link to={success_link}>
                        <button type="submit" className='button_2_3' onClick={() => send_request()}>
                            Reservar assento(s)</button>
                    </Link>
                </form>

                {isDisplayed &&
                    <Footer
                        img_url={all_data.movie.posterURL}
                        movie_title={all_data.movie.title}
                        movie_time={all_data.day.weekday+'-'+all_data.name}
                    />}
            </div>   
        </>
    )
}
