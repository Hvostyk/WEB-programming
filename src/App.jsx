import Home from './pages/Home.jsx'
import Signup from './components/Signup.jsx';
import {
    BrowserRouter,
    Routes,
    Route,
    } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
        );
}

export default App