import React from 'react'
import '../modal/modal.css'

const Modal = ({closeModal}) => {
    return (
<div className="modalBackground">
<div className="modalContainer">
 <div className="styleCloseBtn"><button onClick={() => { closeModal(false)}}>X</button></div>   
<div className="comentarios">
<p>dsfsfsfsf</p>
</div>
</div>
        </div>
    )
}

export default Modal
