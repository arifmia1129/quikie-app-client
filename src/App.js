import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SavedStockDetails from './components/view/SavedStockDetails';
function App() {
  return (
    <div className='max-w-7xl mx-auto p-2'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view' element={<SavedStockDetails />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
