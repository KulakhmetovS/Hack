import Login from "./components/pages/Login";
import {Routes, Route} from 'react-router-dom';
import Main from './components/pages/Main';
import UserPage from './components/pages/UserPage';

function App() {
  return (
    <div id="app">
      <Routes>
      <Route exact path='/main_page' element={<Main />} />
      <Route exact path='/user_page' element={<UserPage />} />
      <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
