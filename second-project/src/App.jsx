import Header from './Component/Common/Header/Header'
import Footer from './Component/Common/Footer/Footer'
import Home from './Component/Common/Home/Home'
import Join from './Component/Member/Join/Join'
import Login from './Component/Member/Login/Login'
import Info from './Component/Member/Info/Info'
import BoardList from './Component/Board/BoardList'
import BoardForm from './Component/Board/BoardForm'
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Component/context/AuthContext'
import BoardDetail from './Component/Board/BoardDetail'



function App() {
  return (
    <>
    <AuthProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boardForm" element={<BoardForm />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
      </Routes>

      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
