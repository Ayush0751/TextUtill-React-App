import React,{ useState } from 'react'
// import showAlert from "app.js"

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }

    const handleUpClick2 = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
        
    }

    const clearBtn = ()=>{
      setText("");
      props.showAlert("Cleared textbox","success")
    }

    const copyBtn = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard","success")
    }

    const reverseBtn = (event)=>{
      let str = text.split("");
      let newText = str.reverse();
      newText = newText.join("");
      setText(newText)
      props.showAlert("Text reversed","success")
    }

    // const countWord =()=>{
    //   let temp = text.split(" ").length;
    //   if(text.endsWith(" ")){
    //     return temp-1;
    //     // setWordCount(temp-1);
    //   }
    //   else{
    //     return temp;
    //     // setWordCount(temp);
    //   }
    // }


    const [text, setText] = useState('');
    // const [wordCount, setWordCount] = useState(0);
    // text = "hgbfvbbhj" //wrong way to set text
    // setText("new text")

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>{props.heading}</h1>
      <div className="mb-3"></div>
      
      <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',  color: props.mode==='dark'?'white':'#042743' }} id='myBox' rows="8"></textarea>
      <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick2}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearBtn}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyBtn}>Copy to clipboard</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={reverseBtn}>Reverse Text</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
        {/* <p> {countWord} Words and {text.length} Characters </p> */}
        {/* <p> {countWord} Words and {text.length} Characters </p> */}
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the textbox to perview it here"} </p>
    </div>

    </>
  )
}