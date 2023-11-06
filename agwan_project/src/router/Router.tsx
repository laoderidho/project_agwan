import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/menu/Login.tsx'
import Register from '../pages/menu/Register.tsx'
import UsersDashboard from '../pages/users/UsersDashboard.tsx'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users/dashboard" element={<UsersDashboard />} />
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    </BrowserRouter>
  )
}
