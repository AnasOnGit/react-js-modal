import React from "react";


interface Props {
    /*
    *Title of modal can be null or undefined
    */
    title?:string;
    /*
    *Close button  can be null or undefined
    */
    closeButton?:boolean;
}
export default function ModalHeader({title,closeButton}:Props){
   return(
       <div className="modal-header">
           <div className="modal-header-title">{title}</div>
           <div className="modal-header-close-button">+</div>
       </div>
   )
}