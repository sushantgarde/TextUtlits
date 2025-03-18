import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "Success");
};

const handleClear = ()=>{
   
    setText("");
    props.showAlert("Text Cleared", "Success");
};

const handlelowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "Success");
};

const handlecopy = ()=>{
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "Success")
};
const handleonChange = (evt)=>{
    setText(evt.target.value);
};

    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        {/* {document.title="Textutliles-About"} */}
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonChange} placeholder='Enter the text here :'></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear all</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy</button>
    </div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words, {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes taken to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
