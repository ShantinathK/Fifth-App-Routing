import { useState } from "react";
import Dropdown from "../Components/Dropdown";



function DropdownPage(){
    const [ selection, setSelection]= useState(null);

    const handleSelect = (option)=>{
      setSelection(option);
    }
  
    const options = [
      {label: 'Red', value: 'red'},
      {label: 'Green', value: 'green'},
      {label: 'Blue', value: 'blue'},
      {label: 'Yellow', value: 'yellow'}
    ]
  
  
    return (
      <div className="flex flexDirection-r">
        <Dropdown options={options} selection={selection} onSelect = {handleSelect}/>
        <Dropdown options={options} selection={selection} onSelect = {handleSelect}/>
      </div>
    )
}


export default DropdownPage;