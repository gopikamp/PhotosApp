import logo from './logo.svg';
import './App.css';
import AddPhotos from './components/AddPhotos';
import SearchPhotos from './components/SearchPhotos';
import DeletePhotos from './components/DeletePhotos';
import ViewAllPhotos from './components/ViewAllPhotos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPhotos />} />
        <Route path='/Search' element={<SearchPhotos />} />
        <Route path='/Delete' element={<DeletePhotos />} />
        <Route path='/ViewAll' element={<ViewAllPhotos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
