import React from "react";

import Portal from './Portal'
import { Dialog, Overlay } from "./styles";

const Modal = ({children, open, onClose }) =>{

    if (!open) return null;

    function onOverlayClick() {
        onClose();
    }

    // função para evitar propagação do evento de onoverlayclick
    function onDialog(e) {
        e.stopPropagation();
    }

    return(
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialog}>{children}</Dialog>
            </Overlay>
        </Portal>
    )
}

export default Modal;