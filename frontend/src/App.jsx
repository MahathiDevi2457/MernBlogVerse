import NavBar from "./NavBar"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Home from "./Home"
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>

  )
}

export default App
