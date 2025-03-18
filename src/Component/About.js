import React from 'react'



export default function About(props) {

    // const [myStyle, setMyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white  '
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#6a74a0' : 'white',
        border:'2px solid',
        
    }

  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
            <div className="accordion my-3" id="accordionExample" style={{color: props.mode === 'dark'?'white':'#6a74a0'}}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text </strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
            TextUtils gives oyu a way to analyze your text quickly and efficiently. Be it word count, character count or     
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count &count statistics for a given text. TextUtiles reports the number of words and character. Thus it is suitable for writing text with word/ character limit.    
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong> Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
            This word counter software works in any web Browser such as Chrome, firefox, Internet Explorer, safari, opera. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}


