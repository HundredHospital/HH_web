// import styled from "styled-components";
import MainPage from "./mainComponents/MainPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListView from "./searchComponents/appro_search";
import NewsSearch from "./searchComponents/news_search";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/approSearch" element={<ListView></ListView>}></Route>
        <Route path="/newsSearch" element={<NewsSearch></NewsSearch>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
