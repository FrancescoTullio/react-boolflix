import axios from "axios"
import { useEffect, useState } from "react"
import CardComponent from "./component/CardComponent";
import SerchComponent from "./component/SerchComponent";


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
    <SerchComponent imputValue={imputValue} setImputValue={setImputValue} getAll={getAll} resetAll={resetAll}/>
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
