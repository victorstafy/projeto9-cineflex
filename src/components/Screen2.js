import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';


function Seat({isAvailable,isSelected,seat_n,select_seat,index}){
    return (
        <>
        {isAvailable ? ( isSelected ? (<div className="selected" onClick={()=>{ select_seat(isSelected,seat_n,index) }}>
        {('0' + seat_n).slice(-2)}</div> ): 

        (<div className="available" onClick={()=>{ select_seat(isSelected,seat_n,index) }}>
        {('0' + seat_n).slice(-2)}</div> ) ):  

        (<div className="occupied" onClick={()=>{alert('Esse assento não está disponível')}}>
        {('0' + seat_n).slice(-2)}</div>)}
        </>
    )
}

export default function Screen2({seats_id,setSeats_id}) {

    const [all_data, setAll_data] = useState([]);
    const [seats_data, setSeats_data] = useState([]);
    const [seat_selected, setSeat_selected] = useState(false);
    const { section_id } = useParams();
    let new_seats_list;
    let seat_selected_l;
    let setSeat_selected_l

    useEffect(() => {
        const promise = axios.get(  
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${section_id}/seats`
        );
    
        promise.then((res) => {
            setAll_data(res.data);
            setSeats_data(res.data.seats)
        });
      }, []);


    function select_seat(isSelected,seat_n,index){
        setSeat_selected_l[index](!isSelected)
        if (seats_id.includes(seat_n)){
            setSeats_id(seats_id.filter((value,_) => value !== seat_n))
        }
        else{
            setSeats_id([...seats_id, seat_n])
        }
        console.log(seats_id)
    }
    
    // seats_data.map((value)=>(value.isSelected=false))  
    
    seat_selected_l=[...Array(seats_data.length).fill(seat_selected)]
    setSeat_selected_l=[...Array(seats_data.length).fill(setSeat_selected)]

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
                    isSelected={seat_selected_l[index]}
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
            </div>   
        </>
    )
}