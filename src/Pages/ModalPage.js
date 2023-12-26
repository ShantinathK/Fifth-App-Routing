import { useState } from "react";
import Modal from "../Components/Modal";
import Button from '../Components/button';

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick =()=>{
        setShowModal(!showModal);
    }
    const OnClickClose = (term)=>{
        setShowModal(term);
    }
    const actionBar = <Button onClick={handleClick} secondary rounded >I Accept</Button>
    const modal = (<Modal showModal={showModal} actionBar={actionBar} OnClickClose={OnClickClose}>
                        <iframe title="Career" src="https://technicalcareers-wipro.icims.com" />
                  </Modal>);
    return(
        <div>
            <Button  onClick={handleClick} primary>open modal</Button>
            {showModal && modal}
        </div>
    ) 

}

export default ModalPage;