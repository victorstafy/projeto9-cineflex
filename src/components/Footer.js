
export default function Footer({img_url,movie_title,movie_time}){
    return (
    <div className="footer">
        <div className="footer_img_back">
            <img src={img_url}/>
        </div>
        <div className="footer_title">
            <p>{movie_title}</p>
            <p>{movie_time}</p>
        </div>
    </div>
    )
}