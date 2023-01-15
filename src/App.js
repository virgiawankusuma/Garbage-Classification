import { 
  Routes, 
  Route 
} from 'react-router-dom';

import Home from './pages/Home';
import Acknowledgment from './pages/Acknowledgment';
import Classify from './pages/Classify';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acknowledgment" element={<Acknowledgment />} />
      <Route path="/klasifikasikan" element={<Classify />} />
    </Routes>
  );
}

export default App;
