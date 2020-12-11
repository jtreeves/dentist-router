function Procedures(props) {
    const procedureItems = props.proceduresList.map((procedure) => {
        return <li>{procedure}</li>
    })
    return(
        <ul>
            {procedureItems}
        </ul>
    )
}

export default Procedures