import Experience from "./Component/Experience";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import {Helmet} from "react-helmet"


function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Keilsun</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Nested component" />
            </Helmet>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="experience" element={<Experience/>}/>
          <Route path="projects" element={<Projects/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
