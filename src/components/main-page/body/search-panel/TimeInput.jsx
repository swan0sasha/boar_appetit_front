import React, { useState } from 'react'
import "../../../../styles/main-page/time-input.css"
import "../../../../styles/fonts.css"

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
      <div className="time-input-container">
        <input type="number" min="0" value={hours} onChange={handleHoursChange} className='time-input plain-text'/>
        <span className="plain-text">:</span>
        <input type="number" min="0" value={minutes} onChange={handleMinutesChange} className='time-input plain-text'/>
      </div>
    );
}

export default TimeInput