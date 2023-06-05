import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./component/Signin";
import ListUser from './component/ListUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/list-user" element={<ListUser />} />
      </Routes>
    </Router>
  );
}

export default App;
