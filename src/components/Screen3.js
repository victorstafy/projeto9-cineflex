import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Screen3({request_info,setRequest_info}) {

    let selected_seats=[...request_info.seats_id];
    console.log(selected_seats)

    return(
        <>
            <div className='top_title_3'>
                Pedido feito com sucesso!
            </div>

            <div className='content_screen_3'>
                <div className='final_text'>
                    <div className='final_text_up'>
                        Filme e sessão
                    </div>
                    <div className='final_text_down'>
                        <p>{request_info.movie}</p>
                        <p>{request_info.day+' '+request_info.hour}</p>
                    </div>
                </div>

                <div className='final_text'>
                    <div className='final_text_up'>
                        Ingressos
                    </div>
                    <div className='final_text_down'>
                        {selected_seats.map( (value)=> (
                        <p>{'Assento '+value}</p>) )}
                    </div>
                </div> 

                <div className='final_text'>
                    <div className='final_text_up'>
                        Comprador
                    </div>
                    <div className='final_text_down'>
                        <p>{'Nome: '+request_info.name_user}</p>
                        <p>{'CPF: '+request_info.cpf}</p>
                    </div>
                </div>

                <Link to={'/'}>
                <div className='button_2_3' onClick={() => (request_info={})}>
                    Voltar para Home</div>
                </Link>
            </div>
        </>

    )
}