import { useState } from "react";

 export const SimpleForm = () => {
    const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>isim-soyisim: {text}</p>
    </div>
  );
};

export default SimpleForm;