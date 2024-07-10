import { useState, useEffect } from "react";

export const Count = () => {
    const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Component mounted');
  }, []);


  useEffect(() => {
    console.log('Text changed:', text);
  }, [text]);


  useEffect(() => {
    console.log('Component rendered');
  });

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Increase Count</button>
      <p>Count: {count}</p>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>You typed: {text}</p>
    </div>
  );
};

export default Count;