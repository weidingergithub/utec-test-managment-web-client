import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homepage.component'
import ErrorPage from './pages/error/errorpage.component'
import ManageUsersPage from './pages/users/manage-users.component'
import QCPCPage from './pages/qcpc/qcpc.component'
import OrderManagerPage from './pages/orders/orders.component'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } errorElement={ ErrorPage } />
      <Route path="/users" element={ <ManageUsersPage /> } errorElement={ ErrorPage } />
      <Route path="/qcpc" element={ <QCPCPage /> } errorElement={ ErrorPage } />
      <Route path="/orders" element={ <OrderManagerPage /> } errorElement={ ErrorPage } />
    </Routes>

    
  )
}

export default App
