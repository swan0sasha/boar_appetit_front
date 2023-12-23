import React, { useState } from 'react'
import "../styles/InputIngredients.css"

function InputIngredients({ onChange }) {
    const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        const updatedTags = [...tags, value];
        setTags(updatedTags);
        e.target.value = '';
        onChange(updatedTags);
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
        onChange(tags);
    }

    return (
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" />
        </div>
    )
}
  

export default InputIngredients