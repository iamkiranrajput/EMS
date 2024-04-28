import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import NoMatch from './pages/NoMatch/NoMatch';
import PostUser from './pages/Employee/PostUser';
function App() {
  return (
    <>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="*" element={<NoMatch/>} />
        <Route path="/employee" element={<PostUser/>} />
      </Routes>
    </>
  );
}

export default App;
