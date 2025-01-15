import ButtonComponent from "./ButtonComponent"

const SerchComponent = ({imputValue, setImputValue, getAll, resetAll}) => {
    return (
        <header className="row justy-content-conter al-items">
        <section>
          <input type="text" value={imputValue} onChange={(event) => { setImputValue(event.target.value) }} />
          <button onClick={() => getAll()} className="ml-15">cerca</button>
          <button onClick={() => resetAll()} className="ml-5">rest</button>
        </section>
      </header>
    )
}

export default SerchComponent