import ButtonComponent from "./ButtonComponent"

const SerchComponent = () => {
    return (
        <>
            <input type="text" value={imputValue} onChange={(event) => { setImputValue(event.target.value) }} />
            <ButtonComponent />
            <ButtonComponent />
        </>
    )
}

export default SerchComponent