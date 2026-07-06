// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
/*import ProtectedRoute from './layout/ProtectedRoute';*/
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/*<Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />*/}
      </Route>
    </Routes>
  );
}

export default App;
