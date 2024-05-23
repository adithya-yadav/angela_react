import React, { useState } from 'react'
import "./index.css"
import App from './kiviCare/App';
import AppAng from './angela/AppAng';


function PageTabs() {
    const [selectedOption, setSelectedOption] = useState('angla');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <div>
                <label>
                    <input
                        type="radio"
                        value="angla"
                        checked={selectedOption === 'angla'}
                        onChange={handleOptionChange}
                    />
                    <span className="big-radio-button">angela Home page</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="kavi"
                        checked={selectedOption === 'kavi'}
                        onChange={handleOptionChange}
                    />
                    <span className="big-radio-button">kivi care Home page</span>
                </label>
            </div>
            {selectedOption === "angla" && <AppAng/>}
            {selectedOption === "kavi" && <App/>}
        </>
    )
}

export default PageTabs