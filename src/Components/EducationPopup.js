import React from "react"

const EducationPopup = ({ open, onClose }) => {
    if (!open) return null
    
    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="popup_container">
                <p onClick={onClose} className="close_popup">X</p>
            </div>
        </div>
    )
}

export default EducationPopup;