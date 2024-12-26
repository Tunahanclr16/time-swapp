import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ServiceDetail from './pages/services/ServiceDetail';
import CreateServicePost from './pages/services/CreateServicePost';
import Profile from './pages/profile/Profile';
import Chat from './pages/chat/Chat';
import TimeCredits from './pages/credits/TimeCredits';
import Orders from './pages/orders/Orders';
import Community from './pages/community/Community';
import Help from './pages/help/Help';
import Settings from './pages/settings/Settings';
import Notifications from './pages/notifications/Notifications';
import Statistics from './pages/statistics/Statistics';
import ErrorPage from './pages/ErrorPage/Error';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Kullanıcının giriş yapıp yapmadığını kontrol et

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Giriş yapmış kullanıcılar için yönlendirme */}
        <Route path="/home" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Dashboard />} />
          <Route path="chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />
          <Route path="profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="notifications" element={isAuthenticated ? <Notifications /> : <Navigate to="/login" />} />
          <Route path="services/create" element={isAuthenticated ? <CreateServicePost /> : <Navigate to="/login" />} />
          <Route path="services/:id" element={isAuthenticated ? <ServiceDetail /> : <Navigate to="/login" />} />
          <Route path="orders" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
          <Route path="community" element={isAuthenticated ? <Community /> : <Navigate to="/login" />} />
          <Route path="help" element={isAuthenticated ? <Help /> : <Navigate to="/login" />} />
          <Route path="settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
          <Route path="statistics" element={isAuthenticated ? <Statistics /> : <Navigate to="/login" />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;