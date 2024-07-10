import { useState } from "react";

export const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    
    const handleClick = () => {
        setIsOn(!isOn);
        };
    
    return (
        <div>
          <p>The light is {isOn ? 'On' : 'Off'}</p>
          <button onClick={handleClick}>Toggle</button>
        </div>
    );
};
    
export default Toggle;