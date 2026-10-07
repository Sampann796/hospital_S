import Home from '../pages/Home'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'
import MyAccount from "../Dashboard/userAccount/MyAccount.jsx";
import Dashboard from "../Dashboard/doctorAccount/Dashboard.jsx"
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Register" element={<Signup />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Doctors/:id" element={<DoctorsDetails />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>} />
            <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />
            <></>
         </Routes>
    )
};

export default AppRoutes;