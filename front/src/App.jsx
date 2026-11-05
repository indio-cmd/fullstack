import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/Login'
import Users from './pages/Users'
import Produtos from './pages/Produtos'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/produtos' element={<Produtos />} />

<Route  element={<PrivateRoute/>}>
        <Route path='/users' element={<Users />} />
</Route>

      </Routes>
      <Footer />

    </>)
}

export default App
