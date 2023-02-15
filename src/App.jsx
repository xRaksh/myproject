import {  HashRouter  , Routes, Route } from "react-router-dom";
import Nav from './component/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Review from './pages/Review'
import Contact from './pages/Contact'
import Working from './pages/Working'
import Error from './pages/Error'
import './component/compStyle/compStyle.css'
import './pages/pagesStyle/pages.css'
import './App.css'
import { useEffect } from "react";



const App = () => {

  useEffect(() => {
    alert("If you are looking this website in your phone then please use desktop mode");
  });

  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/working" element={<Working />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        {/* <Footer/> */}
        </HashRouter>
    </>
  )
}

export default App;