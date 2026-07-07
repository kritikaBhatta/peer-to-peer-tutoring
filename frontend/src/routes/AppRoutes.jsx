import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path ="/login" element={<Login />}/>
                <Route path ="/Register" element={<Register/>}/>

                <Route path= "/" element= {<MainLayout/>}>
                    <Route index element={<Home />} />
                    <Route path = "Dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}