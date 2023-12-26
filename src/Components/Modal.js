import { useState } from "react";
import Button from "./button";
import ReactDOM from 'react-dom'


function Modal({OnClickClose, showModal, children, actionBar}){
    const [term, setTerm] = useState(null);

    const Close = ()=>{
        setTerm(true);
        OnClickClose(term);
    }


    return(
        ReactDOM.createPortal(
        <div>
            <div  onClick={Close} className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">
                {/* <iframe title="Career" src="https://technicalcareers-wipro.icims.com" /> */}
                {/* <div className="flex justify-end">
                    <Button secondary rounded  onClick={Close}>Accept</Button>
                </div> */}
                {children}
                {actionBar}
                
            </div>
        </div>,
        document.querySelector('.modal-container') // modal-container in index.html
        )
    );

    //without using createPortal - causes bug when parent element is positionedwith relative style.
    // return (
    //     <div>
    //         <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
    //         <div className="absolute inset-40 p-10 bg-white flex flex-col items-center justify-center">
    //             <Button secondary rounded onClick={Close}>Accept</Button>
    //             <iframe title="Career" src="https://technicalcareers-wipro.icims.com" />
    //         </div>
            
    //     </div>
    // );

}

export default Modal