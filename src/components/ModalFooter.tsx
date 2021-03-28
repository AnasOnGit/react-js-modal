import React from "react";

export interface FooterProps {
    closeButton:boolean;
    customButton?:boolean | undefined;
    customButtonTitle?:string | undefined;
    customButtonCallback?:React.MouseEventHandler;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalFooter({closeButton,closeModal,customButton,customButtonTitle,customButtonCallback}:FooterProps){
    return(
        <div className="modal-footer">
            {customButton == true ?<button className="modal-footer-custom-btn" onClick={customButtonCallback}>{customButtonTitle}</button>:null}
            {closeButton == true ?<button className="modal-footer-close-btn"  onClick={()=>closeModal(false)}>Close</button>:null}
        </div>
    )
}