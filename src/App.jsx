import React from "react"
import Signup from "./pages/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Dashboard from "./Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import Signin from "./pages/Signin"
import LandingPage from "./pages/LandingPage"
// import ForgotPassword from "./ForgotPassword"
// import UpdateProfile from "./UpdateProfile"

function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
            {/* <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
          </Routes>
        </AuthProvider>
      </Router>
  )
}
export default App