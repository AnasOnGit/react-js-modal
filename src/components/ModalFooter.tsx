import React from "react";

interface Props {
    closeButton:boolean;
}

export default function ModalFooter({closeButton}:Props){
    return(
        <div className="modal-footer">
            {closeButton == true ?<button className="modal-footer-btn">Close</button>:null}
        </div>
    )
}