import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import AdamEditor from './pages/AdamEditor';
import NinaEditor from './pages/NinaEditor';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <h1 className="text-center bg-dark text-white p-2">React Character Editor</h1>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adam" element={<AdamEditor />} />
        <Route path="/nina" element={<NinaEditor />} />
      </Routes>
    </div>
  );
}

export default App;
