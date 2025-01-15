const CardComponent = ({ element }) => {

    const { original_title, poster_path, title, vote_count, original_language, original_name, overview, vote_average} = element;

    const star = Math.ceil(vote_average / 2);

    return (
        <>
        <div className="card">
            <div className="card-img">
                {poster_path === null ? <img src="/img/placeholder-img.webp" alt="{title}" /> : <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="{title}" />}

            </div>
            <div className="card-body">
                <h3>{title}</h3>
                {original_name && <h4>{original_name}</h4>}
                {original_title && <h4>{original_title}</h4>}
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
            </div>
            
        </div>
        <div className="card-hover">
                <p>descrizione: <br /> {overview}</p>
                <p>voto: {star}</p>
            </div></>
    )
}

export default CardComponent