import React from "react"
import {AiOutlineCloseCircle} from 'react-icons/ai'
const ColorInput = ({ inputId,colorsLength, bgColor, onChange,handleDelete }) => {
  console.log(typeof inputId)
  return (
    <div className="colorInputContainer">
      <div className="colorSwatch" style={{ backgroundColor: bgColor }}></div>
      {(colorsLength > 2)?<button className="deleteButton"><AiOutlineCloseCircle color="grey"  onClick={()=>handleDelete(inputId-1)}/></button>:null}
      <div className="inputContainer">
        <label htmlFor={`colorInput-${inputId}`}>Color {inputId}:</label>
        <input
          type="text"
          maxLength={7}
          id={`colorInput-${inputId}`}
          name={`colorInput-${inputId}`}
          value={bgColor}
          onChange={(e) => onChange(e, inputId - 1)}
        />
      </div>
    </div>
  )
}

export default ColorInput
