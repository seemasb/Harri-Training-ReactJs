import Home from '../src/Pages/Home'
import Info from '../src/Pages/Info'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import './App.css'
// add


export const CountryContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {

  return (
    <div className="App">
      {/* <CountryContext.Provider value={country}>
        <RouterProvider router={router} />
      </CountryContext.Provider> */}

    </div>
  );
}

export default App;


//  {/* <BrowserRouter> */}
//  <Routes>
//  <Route>
//    <Route index element={<Home setCountry={setCountry} />} />
//    <Route path="Info" element={<Info country={country} />} />
//  </Route>
// </Routes>
// {/* </BrowserRouter> */}