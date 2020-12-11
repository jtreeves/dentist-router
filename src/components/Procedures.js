import { Link } from 'react-router-dom'

function Procedures(props) {
    const procedureItems = props.proceduresList.map((procedure) => {
        return <li>
            <Link to={`/procedures/${procedure.id}`}>
                {procedure.name}
            </Link>
        </li>
    })

    return(
        <>
            <h1>Procedures</h1>
            <ul>{procedureItems}</ul>
        </>
    )
}

export default Procedures