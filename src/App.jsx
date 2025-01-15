import axios from "axios"
import { useEffect, useState } from "react"
import CardComponent from "./component/CardComponent";


function App() {

  const urlApiFilms = "https://api.themoviedb.org/3/search/movie";
  const urlApiSeries = "https://api.themoviedb.org/3/search/tv"

  const [imputValue, setImputValue] = useState("")
  const [arrayFilms, setArrayFilms] = useState([])
  const [arraySeries, setArraySeries] = useState([])

  const getMovie = () => {
    axios(urlApiFilms, {
      params: {
        api_key: "e5ff284d647bae3c9c2b12b677e9e728",
        query: imputValue
      }
    }
    ).then((resp) => {
      console.log(resp.data.results);
      
      const newArray = resp.data.results;
      setArrayFilms(newArray)
    })
  }

  const getSeries = () => {
    axios(urlApiSeries, {
      params: {
        api_key: "e5ff284d647bae3c9c2b12b677e9e728",
        query: imputValue
      }
    }).then((resp) => {
      const newArray = resp.data.results;
      setArraySeries(newArray);
    })
  }

  const getAll = () => {
    getSeries();
    getMovie();
  }

  const resetAll = () => {
    setArrayFilms([]);
    setArraySeries([]);
    setImputValue("");
  }



  return (
    <>
      <header className="row justy-content-conter al-items">
        <section>
          <input type="text" value={imputValue} onChange={(event) => { setImputValue(event.target.value) }} />
          <button onClick={() => getAll()} className="ml-15">cerca</button>
          <button onClick={() => resetAll()} className="ml-5">rest</button>
        </section>
      </header>
      <main>
        <section>
          <div className="container">
            {
              arrayFilms.length !== 0  && <h2>-----films-----</h2>
            }
            <div className="row">
              {
                arrayFilms.map((curFilm, index) => {
                  return (
                    <div key={index} className="col-3">
                      <CardComponent element={curFilm} />
                    </div>
                  )
                })
              }
            </div>
            {
              arraySeries.length !== 0 && <h2>-----serie----</h2>
            }
            <div className="row">
              {
              arraySeries.map((curSerie, index) => {
                return (
                  <div key={index} className="col-3">
                    <CardComponent element={curSerie} />
                  </div>
                )
              })
            }
            </div>
            


          </div>
        </section>
      </main>
    </>
  )
}

export default App
