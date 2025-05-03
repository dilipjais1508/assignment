import './App.css'
import AuthForm from './AuthForm'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AuthForm initialMode="login" />} />
        <Route path="/signup" element={<AuthForm initialMode="signup" />} />
      </Routes>
    </Router>
  )
}

export default App
