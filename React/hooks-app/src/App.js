import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Teste } from './useState';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}

export default App;
