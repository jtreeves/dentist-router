import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div className='App-header'>
                <Home />
                <Contact />
                <Procedures />
            </div>
        </BrowserRouter>
    )
}

export default App