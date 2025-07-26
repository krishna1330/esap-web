import Header from "./components/header"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/superadmin/home";
import Admins from "./pages/superadmin/admins";
import Students from "./pages/superadmin/students";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/students" element={<Students />} />
          <Route path="/profile" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
