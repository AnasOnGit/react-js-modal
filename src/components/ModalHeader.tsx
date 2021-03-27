import React from "react";


interface Props {
    /*
    *Title of modal can be null or undefined
    */
    title?:string;
    /*
    *Close button  can be null or undefined
    */
    headerCloseButton?:boolean;
}
export default function ModalHeader({title,headerCloseButton}:Props){
   return(
       <div className="modal-header">
           <div className="modal-header-title">{title}</div>
          {headerCloseButton == true ? <div className="modal-header-close-btn">+</div>:null}
       </div>
   )
}