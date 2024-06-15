import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import Home from './components/Home';
import Header from './components/Layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:id" element={<CategoryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
