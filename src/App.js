//Import all dependencies, other Components

import Header from "./my-components/Header";
import Footer from "./my-components/Footer";
import Home from "./my-components/Home";
import AdvancedJS  from "./my-components/AdvancedJS";
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQ from "./my-components/FAQ";
import Invoice from "./my-components/Invoice";
//Function Component "App"
function App() {

 //Component UI: HTML Rendering
 return (
 <> {/*React Fragment: serve as parent component in JSX and doesn't add anything to the DOM */}
 <BrowserRouter>
 <Header />
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/advancedJS" element={<AdvancedJS />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/invoice" element={<Invoice />} />
 </Routes>
 <Footer />
 </BrowserRouter>
 </>
 );
}
//Export this component to the entire app, can be re-used or hooked into other Components
export default App; 