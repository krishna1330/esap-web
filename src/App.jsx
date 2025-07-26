import Header from "./components/header"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/superadmin/home";
import Admins from "./pages/superadmin/admins";
import Students from "./pages/superadmin/students";

function App() {

  return (
    <>
      <Header />
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
