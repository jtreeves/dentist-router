import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
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
                <Route path='/' exact component={Home} />
                <Route path='/contact' component={Contact} />
                <Route
                    path='/procedures'
                    render={() => {
                        return <Procedures proceduresList={proceduresList} />
                    }}
                />
            </>
        </BrowserRouter>
    )
}

export default App