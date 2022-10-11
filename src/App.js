
import './App.css';
import Narbar from './component/Narbar';
import User from './component/User';
import { Routes, Route} from "react-router-dom";
import CreateUser from './component/CreateUser';
import UpdateUser from './component/UpdateUser';
function App() {
  return (
    <div>
      <Narbar/>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
