import "./styles.css";
// import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Podcast from "./Routes/Podcast";
import Blog from "./Routes/Blog";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import PastGuests from "./Routes/PastGuests";

export default function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/podcast" element={<Podcast/>}></Route>
        <Route path="/guest" element={<PastGuests/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}