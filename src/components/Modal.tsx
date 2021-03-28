import React from "react"
import { Interface } from "readline"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

// import interface
import {FooterProps} from "./ModalFooter"

interface Props {
    open:boolean;
    header?:boolean;
    headerCloseButton?:boolean;
    customButton?:boolean;
    closeButton:boolean;
    footer?:boolean; 
    title?:string;
    customButtonTitle?:string;
    theme:string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    customButtonCallback?:React.MouseEventHandler;
    children:JSX.Element | JSX.Element[] | React.ElementType | React.ReactChild | React.ReactNode;

}

export default function Modal({open,setOpen,header,children,title,closeButton,customButton,customButtonTitle,footer,headerCloseButton,customButtonCallback}:Props){
    if(!open) return null
    if(open){
        document.addEventListener('keydown', function(event){
            if(event.key === "Escape"){
                setOpen(false)
            }
            // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    })
    }
    return (
        <div className="modal-bg">
            <div className="modal-container">
                {header?<ModalHeader title={title} headerCloseButton={headerCloseButton} closeModal={setOpen}/>:null}
                <div className="modal-body">{children}</div>
                {footer?<ModalFooter closeButton={closeButton} closeModal={setOpen} customButtonCallback={customButtonCallback} customButton={customButton} customButtonTitle={customButtonTitle}/>:null}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    header: true,
    footer:true,
    theme:"default",
    headerCloseButton:true,
    closeButton:true,
    open:false,
  };