import React, { useState } from 'react';
import "../../../../styles/main-page/search-panel.css"

function Checkbox() {


  return (
    <div className="check-box-container-flex">
      {/* <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className='checkbox'/>
      </label> */}
      <label className="check-box-container">
        <input type="checkbox"/>
        <span className='checkmark'></span>
        </label>
    </div>
  );
}

export default Checkbox;