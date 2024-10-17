import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

  body {
    margin: 0;
    font-family: 'Varela Round', sans-serif; /* Set as the main font */
    background-color: #93ade0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  @font-face {
    font-family: 'Varela Round', sans-serif;
    src: url("/src/fonts/Hansip.ttf");
  }

  h1, h2, h3 {
    font-family: lumispeak; /* Keep lumispeak for headings */
    color: #572E2E;
    
    @media (min-width: 768px) {
      h1 { font-size: 8em; }
    }

    @media (max-width: 767px) {
      h1 { font-size: 4em; }
      h2 { font-size: 2em; }
      h3 { font-size: 5px; }
    }
  }

  h4, h5, h6 {
    @media (min-width: 768px) {
      h4 { font-size: 4em; }
    }

    @media (max-width: 767px) {
      h4 { font-size: 5px !important; }
      h5 { font-size: .7rem !important; }
      h6 { font-size: 5px; }
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
