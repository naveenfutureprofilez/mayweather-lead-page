import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Error from './pages/Error';
import * as React from 'react';
function App() {
  return <>
    <div className="App">
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Landing />}>
              <Route index element={<Landing />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>  
        </BrowserRouter> 
    </div>
  </>
}

export default App;
