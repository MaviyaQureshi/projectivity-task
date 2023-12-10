import React from 'react'
import sakura from "../images/sakura.jpeg"
import emoji1 from "../images/emoji1.png"
import chatting from "../images/chatting.svg"
import attachment from "../images/attachment.svg"
import calendar2 from "../images/calendar2.svg"
import roundPlus from "../images/roundPlus.svg"
import "./k.css"

const Todo = () => {
    return (
        <>

            <div className="scrollable-container" style={{ "height": "73vh", "overflowY": "auto" }}>
                <div className="container border border-white rounded-4 m-0" style={{ "backgroundColor": "#EAEAEA" }}>
                    <div className='mt-2 ms-2' style={{ "fontSize": "1.5rem", "fontWeight": "600" }}>
                        To Do
                    </div>
                    <hr className='rounded-2 border border-dark' />
                    <div className="card border-0 rounded-3">
                        <img src={sakura} className="card-body p-2 rounded-4" style={{ "width": "100%", "height": "8rem", "objectFit": "cover" }} />
                        <div className='d-flex ps-2 align-items-center'>
                            <h5 className='card-body p-2 pe-0'>Storyboard</h5>
                            <img src={emoji1} className='pe-2' style={{ "width": "2rem", "height": "1.5rem" }} />
                        </div>
                        <span className='ps-3 w-75' style={{ "fontSize": "0.8rem" }}>
                            Add a short description or <a href="#">link</a> a web page.
                        </span>
                        <span className='d-flex align-items-center mt-1'>
                            <img src={chatting} className='ms-3 mt-1' style={{ "width": "1.5rem", "height": "1.2rem" }} />
                            <span className='mt-2 ms-2' style={{ "fontSize": "0.8rem" }}>8</span>
                            <img src={attachment} className='ms-3 mt-1' style={{ "width": "1.5rem", "height": "1.2rem" }} />
                            <span className='mt-2 ms-2' style={{ "fontSize": "0.8rem" }}>1</span>
                        </span>
                        <span className='d-flex align-items-center mt-2'>
                            <img src={calendar2} className='ms-3 mt-2' style={{ "width": "1.5rem", "height": "1.2rem" }} />
                            <span className='mt-2 ms-2' style={{ "fontSize": "0.8rem" }}>SEP 30,2021</span>
                        </span>
                        <span className="progress mt-2 bg-secondary" style={{ "height": "0.5rem" }}>
                            <span className="progress-bar" style={{ "width": "35%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></span>
                        </span>
                    </div>
                    <button className="btn text-primary border-0 mt-2 mb-2 rounded-3" style={{ "backgroundColor": "#dee5ff", "height": "2.4rem", "width": "100%" }}>
                        Add cards
                        <img src={roundPlus} className='ms-4' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todo