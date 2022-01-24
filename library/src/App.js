import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import Home from './pages/Home/Home';
import ViewBook from './pages/viewBooks/viewBook';
import BookDetails from './components/bookdetails/bookDetails';
import CssModuleEx from './components/cssModule/cssModule';
import ScssEx from './components/sassStyles/scssex';
import StyledComponent from './pages/styledComponent/styledComponent';
import { GlobalStyle } from './pages/styledComponent/styles';
import MystyledComponent from './pages/stylesEx/myStyledComponent';
function App() {
  return (
    <>
    <GlobalStyle/>
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="viewbooks" element={<ViewBook />} >
          <Route path="details/:id" element={<BookDetails />}></Route>
        </Route>
        <Route path="cssmodule" element={<CssModuleEx />} />
        <Route path="scss" element={<ScssEx />} />
        <Route path="styledComponent" element={<MystyledComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
