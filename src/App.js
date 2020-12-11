import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import Nav from './components/Nav'

import './App.css'

function App() {
    const proceduresList = ['root canal', 'crown', 'cleaning']
    
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