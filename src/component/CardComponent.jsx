const CardComponent = ({element}) => {
    console.log(element)
    const { original_title, poster_path, title, vote_count, original_language } = element;
    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="{title}" />
            </div>
            <div>
                <h3>{title}</h3>
                <h4>{original_title}</h4>
                <span>{original_language}</span>
                <span>{vote_count}</span>
            </div>
        </div>
    )
}

export default CardComponent