import Procedures from "./Procedures";

function ProcedureDetails(props) {
    return(
        <>
            <h1>{props.procedure.name}</h1>
            <p>{props.procedure.description}</p>
        </>
    )
}

export default ProcedureDetails