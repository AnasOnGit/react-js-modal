import React from "react"
import { Interface } from "readline"
import ModalFooter from "./ModalFooter"
import ModalHeader from "./ModalHeader"

interface Props {
    children:JSX.Element | JSX.Element[] | React.ElementType | React.ReactChild | React.ReactNode
}

export default function Modal({children}:Props){
    // const modalBg = 
    return (
        <div className="modal-bg" style={{
            width:"100vw",
            height:"100vh",
            backgroundColor:"#000",
            position:"fixed",
            top:"0",
            left:"0",
        }}>
            <div className="modal-container">
                <ModalHeader title="Title of the modal" closeButton={true}/>
                <div className="modal-body">{children}</div>
                <ModalFooter closeButton={true}/>
            </div>
        </div>
    )
}