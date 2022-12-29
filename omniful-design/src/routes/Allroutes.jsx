import React from 'react';
import {Routes,Route} from "react-router-dom";
import Hubs from './Hubs';
import Sales from './Sales'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/sales' element={<Sales />} />
        <Route path='/hubs' element={<Hubs />} />
    </Routes>
  )
}

export default Allroutes;