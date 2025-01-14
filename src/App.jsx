import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const urlApi = "https://api.themoviedb.org/3/search/movie";

  const [imputValue, setImputValue] = useState("")
  const [arrayFilms, setArrayFilms] = useState([]);

  const getMovie = () => {
    axios(urlApi, {params: {
      api_key: "e5ff284d647bae3c9c2b12b677e9e728",
      query: imputValue
    }}
    ).then((resp) => {
      const newArray = resp.data.results;
      console.log("newArray", newArray)
      setArrayFilms(newArray);
      console.log("arrayFilms", arrayFilms)

    })
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <>
      <section>
        <input type="text" value={imputValue} onChange={(event) => { setImputValue(event.target.value) }} />
        <button onClick={() => getMovie()}>cerca</button>
      </section>
      <section>
        {
          arrayFilms.map((curFilm, index) => {
            return(
              <div key={index}>
                <h3>{curFilm.title}</h3>
                <h4>{curFilm.original_language}</h4>
                <span>{curFilm.original_language}</span>
                <span>{curFilm.vote_count}</span>
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default App
