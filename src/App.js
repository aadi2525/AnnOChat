
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './style.scss'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
const {currentUser} = useContext(AuthContext)

const ProtectedRoute = ({children})=>{
  if(!currentUser){
    return <Navigate to="/Login" />;
  }

  return children;
}

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={
         <ProtectedRoute>
          <Home/>
         </ProtectedRoute>
        } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
