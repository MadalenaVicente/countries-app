import { BrowserRouter , Route , Routes} from 'react-router-dom';
import { Header } from './components/Header';
import './styles/global.scss'
import {Home} from './pages/Home'
import { Country } from './pages/Country';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <main>
    <Routes>
      <Route index path="/" element={<Home />}/>
      <Route path="country/:cca3" element={<Country />} />
    </Routes>
    </main>
    </BrowserRouter>
    </>
    
  );
}

export default App;
