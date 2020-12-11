function Procedures(props) {
    const procedureItems = props.proceduresList.map((procedure) => {
        return <li>{procedure.name}</li>
    })

    return(
        <>
            <h1>Procedures</h1>
            <ul>{procedureItems}</ul>
        </>
    )
}

export default Procedures