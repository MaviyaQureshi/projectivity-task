import React from 'react'
import Todo from "./Todo"
import InProgress from './InProgress'
import Done from "./Done"
import roundPlus from "../images/roundPlus.svg"

const Kanban = () => {
    return (
        <>
            <div className='d-flex p-0 mt-5 flex-md-column'>
                <div className="col" style={{ "height": "fit-content", "overflowY": "auto" }}>
                    <Todo />
                </div>
                <div className="col ms-1" style={{ "height": "fit-content", "overflowY": "auto" }}>
                    <InProgress />
                </div>
                <div className="col ms-1" style={{ "height": "fit-content", "overflowY": "auto" }}>
                    <Done />
                </div>
                <div className="col-1 mt-5" style={{ "height": "fit-content" }}>
                    <div style={{ "transform": "rotate(-90deg)", "hegiht": "10rem", "marginTop": "7.5rem" }}>
                        <button className="btn text-primary border-0" style={{ "backgroundColor": "#dee5ff", "height": "3.5rem", "width": "15rem" }}>More Columns <img className='ms-3' src={roundPlus} /> </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Kanban