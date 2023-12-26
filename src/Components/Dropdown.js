import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./panel";

function Dropdown({options, selection, onSelect}){
    const[ isExpnaded, setIsExpnaded] = useState(false);
    // const [Options, setOpions] = useState("DropDown"); //This is done when you don't want to pass selected info to other component but want to pass data to other component then need to be defined in parent component
    const deRef = useRef();
    const icon = <span className="text-2xl">{isExpnaded? <GoChevronDown /> : <GoChevronLeft/> }</span>

    useEffect(()=>{
        const handler = (event)=>{
            if(deRef.current == null){
                return;
            }
            // console.log(event);
            if(!deRef.current.contains(event.target))
            {
                setIsExpnaded(false);
            }
        }
        document.addEventListener('click', handler, true);
        return ()=>{
            document.removeEventListener('click', handler);  //useEffect cleanup function
        }
    },[]);

    const handleDropdown = ()=>{
        setIsExpnaded(!isExpnaded);
    }

    // when selected data needs to be sent to different component. by calling function declared in parent and passing the data.
    const handleOptionClick = (option)=>{
        setIsExpnaded(false);
        onSelect(option);
    }
    const renderedOptions = options.map((option, index)=>
    {   
        return (
            //This is done when you don't want to pass selected info to other component but want to pass data to other component then need to be defined in parent component
            // <div onClick={()=>{setOpions(option.label); setIsExpnaded(false)}} className="flex ml-3 bg-gray border-1-b items-center cursor-pointer">
            <div onClick={()=>{handleOptionClick(option)}} className="hover:bg-sky-100 rounded cursor-pointer p-1">
            
            {/* uncomment and comment code from return statement, will give correct Output. */}
            {/* {isExpnaded &&  <div key={option.value} >{option.label}</div>} */}
            <div key={option.value} >{option.label}</div>
            </div>
        );
    })

    // while passing thw data to outside.
    // let content = "Dropdown";
    // if (selection){
    //     content = selection.label;
    // }
    //above steps can be done by using check helper("?")  --> {selection?.label || "DropDown"} in below line instead of just {content}

        return(
            <div ref={deRef}  className="w-48 relative">
                <Panel onClick={handleDropdown} 
                className="flex justify-between  items-center cursor-pointer">{selection?.label || "DropDown"}{icon}</Panel>
                {isExpnaded && <Panel className="absolute top-full ">{renderedOptions}</Panel>}   
                {/* above conditional rendering can be done in above code has well - commented section */}
                
            </div>
        );
}

export default Dropdown;