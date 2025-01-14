import axios from "axios"
import { useEffect, useState } from "react"
import CardComponet from "./component/CardComponent";
import SerchComponent from "./component/SerchComponent";


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
      setArrayFilms(newArray)
    })
  }

  const resetAll = () => {
    setArrayFilms([]);
    setImputValue("")
  }

 

  return (
    <>
      <section>
        <input type="text" value={imputValue} onChange={(event) => { setImputValue(event.target.value) }} />
        <button onClick={() => getMovie()}>cerca</button>
        <button onClick={() => resetAll()}>rest</button>
      </section>
      <section>
        {
          arrayFilms.map((curFilm, index) => {
            return(
              <div key={index}>
                <CardComponet element={curFilm} />
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default App
