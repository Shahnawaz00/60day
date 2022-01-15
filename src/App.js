import './css/App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import routesArray from './utils/RoutesArray';
import  DataContext  from './utils/DataContext';

function App() {

  // data entered array 
  const [dataArray, setDataArray] = useState([]);

  return (
    <div className="App">
    <DataContext.Provider value={{dataArray,setDataArray}} >
      <Routes>
        {routesArray.map(({path, element}, key) => 
        <Route path={path} element={element} key={key} />) }
      </Routes>
    </DataContext.Provider>
    </div>
  );
}

export default App;
