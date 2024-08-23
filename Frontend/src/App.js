import { Route, Routes } from 'react-router-dom';
import './App.css';
import NoMatch from './pages/NoMatch/NoMatch';
import PostUser from './pages/Employee/PostUser';
import UpdateUser from './pages/Employee/UpdateUser';
import Dash2 from './pages/Dashboard/Dash2';
import UpdateEmployee from './pages/Employee/UpdateEmployee';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Dash2 />} />
        <Route path="*" element={<NoMatch />} />
        <Route path='/employee/:id' element={<UpdateUser />} />
        <Route path='/update-employee' element={<UpdateEmployee />} />

        <Route path="/employee" element={<PostUser />} />
      </Routes>
    </>
  );
}

export default App;
