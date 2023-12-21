import React, { useState } from 'react'
import "../styles/time-input.css"

function TimeInput() {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
  
    const handleHoursChange = (event) => {
        const value = event.target.value;
        if (value >= 0) {
          setHours(value);
        }
    };
  
    const handleMinutesChange = (event) => {
        const value = event.target.value;
        if (value >= 0) {
          setMinutes(value);
        }
    };
  
    return (
      <div>
        <input type="number" min="0" value={hours} onChange={handleHoursChange} className='time-input'/>
        <span>:</span>
        <input type="number" min="0" value={minutes} onChange={handleMinutesChange} className='time-input'/>
      </div>
    );
}

export default TimeInput