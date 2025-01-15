const CardComponent = ({element}) => {
    
    const { original_title, poster_path, title, vote_count, original_language } = element;
    console.log(poster_path)
    return (
        <div className="card">
            <div className="card-img">
                {poster_path === null ? <img src="/img/placeholder-img.webp" alt="{title}" /> : <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="{title}" />} 
                
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <h4>{original_title}</h4>
                <p>{vote_count}</p>
                {
                    original_language === "it" ? <img src="/img/it.png" alt="{original_language}" /> : ""
                }
                 {
                    original_language === "en" ? <img src="/img/en.png" alt="{original_language}" /> : ""
                }
                {
                    original_language !== "en" && original_language !== "it" ? <img src="/img/bandiera.webp" alt="{original_language}" /> : ""
                }
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default CardComponent