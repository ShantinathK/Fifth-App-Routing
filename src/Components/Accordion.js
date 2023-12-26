import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function Accordion({items}){
const [ expandedIndex, setExpandedIndex] = useState();

    const rendereditems = items.map((item, index) =>{
        const isExpnaded = index === expandedIndex;
        const icon = <span className="text-2xl">{isExpnaded? <GoChevronDown /> : <GoChevronLeft/> }</span>
        const handleSubmit = () => {
            if(isExpnaded){
                setExpandedIndex(null);
            }else{
                setExpandedIndex(index);
            } 
        }
        return (
            <div key={item.id} >
                <span onClick={handleSubmit} className="flex p-3 bg-gray border-b items-center cursor-pointer justify-between">{item.label}{icon}</span>
                {isExpnaded && <div className="border-b p-5" >{item.content}</div>}
            </div>
        );
    });
    return <div className="border-x border-t rounded">{rendereditems}</div>
    
}


export default Accordion;