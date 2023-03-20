import Home from '../src/Pages/Home'
import Info from '../src/Pages/Info'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import './App.css'
// add


export const CountryContext = createContext();

function App() {
  const [country, setCountry] = useState('im country');

  return (
    <div className="App">
      <CountryContext.Provider value={country}>
        {/* <BrowserRouter> */}
          <Routes>
            <Route>
              <Route index element={<Home setCountry={setCountry} />} />
              <Route path="Info" element={<Info country={country} />} />
            </Route>
          </Routes>
        {/* </BrowserRouter> */}
      </CountryContext.Provider>

      {/* <Home setCountry={setCountry} /> */}
    </div>
  );
}

export default App;
