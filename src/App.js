import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./component/Signin";
import ListUser from './component/ListUser';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';


function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin cookies={cookies} setCookie={setCookie} />} />
        <Route exact path="/list-user" element={<ListUser removeCookie={removeCookie} />} />
      </Routes>
    </Router>
  );
}

export default App;
