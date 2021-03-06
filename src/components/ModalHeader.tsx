import React from "react";


interface Props {
    /*
    *Title of modal can be null or undefined
    */
    title?:string;
    theme?:string;
    /*
    *Close button  can be null or undefined
    */
    headerCloseButton?:boolean;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ModalHeader({title,headerCloseButton,theme,closeModal}:Props){
   return(
       <div className="modal-header">
           <div className="modal-header-title">{title}</div>
          {headerCloseButton == true ? <div className={`modal-header-close-btn ${theme}`} onClick={()=>closeModal(false)}>+</div>:null}
       </div>
   )
}