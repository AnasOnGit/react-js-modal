import React from "react"
import { Interface } from "readline"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

// import interface
import {FooterProps} from "./ModalFooter"

interface Props {
    header?:boolean;
    headerCloseButton?:boolean;
    children:JSX.Element | JSX.Element[] | React.ElementType | React.ReactChild | React.ReactNode;
    closeButton:boolean;
    customButton?:boolean | undefined;
    customButtonTitle?:string;
    footer?:boolean; 
    customButtonCallback?:React.MouseEventHandler;
    theme:string,
}

export default function Modal({header,children,closeButton,customButton,customButtonTitle,footer,headerCloseButton,customButtonCallback}:Props){
    // const modalBg = 
    return (
        <div className="modal-bg">
            <div className="modal-container">
                {header?<ModalHeader title="Title of the modal" headerCloseButton={headerCloseButton}/>:null}
                <div className="modal-body">{children}</div>
                {footer?<ModalFooter closeButton={closeButton} customButtonCallback={customButtonCallback} customButton={customButton} customButtonTitle={customButtonTitle}/>:null}
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
  };