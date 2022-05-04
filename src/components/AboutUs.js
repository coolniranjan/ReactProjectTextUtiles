import React, { useState } from 'react';
export default function AboutUs() {
    const [btntext, setbtntxt] = useState("Enable Dark Mode");
    
    const [mode, setmode] = useState({
        color: 'black',
        backgroundColor: 'white'
    }); 
    const[txt,settxt]=useState("this text is editable")
    function changeStyle() {
        if (mode.color === 'black') {                            
            setmode({
                color: "white",
                backgroundColor: "black",
               border:'1px solid white'
            })
            setbtntxt("Disable Dark mode")
            settxt("text edited")
        }
        else {
            setmode( {
                color: "black",
                backgroundColor: "white"
            })
            setbtntxt("Enable Dark mode")
            settxt('this text is editable')
        }
    }
return (
    <>
        <div className='container my-3' style={mode}>
            <div className="accordion" id="accordionPanelsStayOpenExample" >
                <div className="accordion-item"  style={mode}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button  style={mode} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> {txt}
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={mode}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button  style={mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong>{txt}
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={mode}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button  style={mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary my-3' onClick={changeStyle} >{btntext}</button>
        </div>
    </>
)
}