import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import NoMatch from './pages/NoMatch/NoMatch';
import PostUser from './pages/Employee/PostUser';
import UpdateUser from './pages/Employee/UpdateUser';
function App() {
  return (
    <>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="*" element={<NoMatch />} />
        <Route path='/employee/:id' element={<UpdateUser/>} />
        <Route path="/employee" element={<PostUser/>} />
      </Routes>
    </>
  );
}

export default App;
