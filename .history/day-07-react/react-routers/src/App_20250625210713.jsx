import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer';
import About from './components/About/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    div
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
react-router-dom.js?v=b47d0356:9223 Uncaught TypeError: Cannot destructure property 'basename' of 'React10.useContext(...)' as it is null.
    at LinkWithRef (react-router-dom.js?v=b47d0356:9223:11)
    at react-stack-bottom-frame (react-dom_client.js?v=b47d0356:17422:20)
    at renderWithHooks (react-dom_client.js?v=b47d0356:4204:24)
    at updateForwardRef (react-dom_client.js?v=b47d0356:6459:21)
    at beginWork (react-dom_client.js?v=b47d0356:7862:20)
    at runWithFiberInDEV (react-dom_client.js?v=b47d0356:1483:72)
    at performUnitOfWork (react-dom_client.js?v=b47d0356:10866:98)
    at workLoopSync (react-dom_client.js?v=b47d0356:10726:43)
    at renderRootSync (react-dom_client.js?v=b47d0356:10709:13)
    at performWorkOnRoot (react-dom_client.js?v=b47d0356:10357:46)
react-dom_client.js?v=b47d0356:6227 An error occurred in the <Link> component.

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.

defaultOnUncaughtError @ react-dom_client.js?v=b47d0356:6227
  );
}

export default App;
