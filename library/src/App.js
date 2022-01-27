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
import UseContext from './pages/context/context';
import { ThemeProvider } from 'styled-components';
import Mui from './pages/mui/mui';
import { StyledEngineProvider } from '@mui/material/styles';
import HttpEx from './pages/http/httpex';
import HttpPost from './pages/http/http-post';
function App() {

  const theme={
    bgcolor:"white",
    border:"gray"
  }
  return (
    <>
    <GlobalStyle/>
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <Header />
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="viewbooks" element={<ViewBook />} >
          <Route path="details/:id" element={<BookDetails />}></Route>
        </Route>
        <Route path="cssmodule" element={<CssModuleEx />} />
        <Route path="scss" element={<ScssEx />} />
        <Route path="styledComponent" element={<MystyledComponent />} />
        <Route path="context" element={<UseContext />} />
        <Route path="mui" element={<Mui />} />
        <Route path="http" element={<HttpEx />} />
        <Route path="httppost" element={<HttpPost />} />
      </Routes>
      </ThemeProvider>
      <Footer />
    </BrowserRouter>
    </StyledEngineProvider>
    </>
  );
}

export default App;
