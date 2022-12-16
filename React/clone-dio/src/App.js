import Button from './components/Button';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';

function App() {
  return (
    <>
      {/* Navegação entre páginas criadas (home e login) */}

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <h1>Hello React!</h1>
                {/* Componente button criado */}
                <Button title="Join" />
                <Button title="Leave" />
              </div>
            }
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
