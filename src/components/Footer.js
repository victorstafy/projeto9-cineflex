
export default function Footer({img_url,movie_title,movie_time}){
    console.log(img_url)
    return (
    <div className="footer">
        <div className="footer_img_back">
            <img src={img_url}/>
        </div>
        <div className="footer_title">
            {movie_title}
            {movie_time}
        </div>
    </div>
    )
}