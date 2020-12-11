import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import ProcedureDetails from './components/ProcedureDetails'
import Nav from './components/Nav'

import './App.css'

function App() {
    const proceduresList = [
        {
            id: 1,
            name: 'Root Canal',
            description: 'Very painful'
        },
        {
            id: 2,
            name: 'Crown',
            description: 'Absolutely awful'
        },
        {
            id: 3,
            name: 'Cleaning',
            description: 'Routine torture'
        }
    ]

    return (
        <BrowserRouter>
            <>
                <Nav />
                <Route
                    exact
                    path='/'
                    component={Home}
                />
                <Route
                    path='/contact'
                    component={Contact}
                />
                <Route
                    exact
                    path='/procedures'
                    render={() => {
                        return <Procedures proceduresList={proceduresList} />
                    }}
                />
                <Route
                    path='/procedures/:id'
                    render={(routeInfo) => {
                        const id = routeInfo.match.params.id
                        const targetProcedure = proceduresList.find((procedure) => procedure.id === parseInt(id))
                        return <ProcedureDetails procedure={targetProcedure} />
                    }}
                />
            </>
        </BrowserRouter>
    )
}

export default App