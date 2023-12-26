// import logo from './logo.svg';
// import './App.css';

// import { useState } from "react";
// import Link from "./Components/link"; //to show manually without using side bar process.
import SideBar from "./Components/SideBar";
import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";
import DropdownPage from "./Pages/DropdownPage";
import ModalPage from "./Pages/ModalPage";




function App() {
  
return(
  <div className="p-3 container mx-auto grid grid-cols-6 gap-4 mt-4 items-start">
    
        {/* <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">DropDown</Link>
        <Link to="/button">Button</Link> */}
        {/* inside of multiple link element use side bar which has all link */}
        <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
            <AccordionPage />
        </Route>
        <Route path="/dropdown">
            <DropdownPage />
        </Route>
        <Route path="/button">
            <ButtonPage />
        </Route>
        <Route path="/modal">
            <ModalPage />
        </Route>
        <Route path="/">
        </Route>
      </div>
  </div>
);}

export default App;
