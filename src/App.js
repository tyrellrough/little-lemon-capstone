import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './Components/Homepage';
import Bookingpage from './Components/Bookingpage';



function App() {
  return (
    <ChakraProvider className="root-element">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<Bookingpage />}></Route>
          </Routes>
        </BrowserRouter>


      </main>
    </ChakraProvider>






  );
}

export default App;
