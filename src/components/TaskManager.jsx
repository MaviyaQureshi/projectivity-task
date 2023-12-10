import React from 'react'
import columns from "../images/columns.svg"
import menu from "../images/menu.svg"
import calendar from "../images/calendar.svg"
import hierarchy from "../images/hierarchy.svg"
import lines from "../images/lines.svg"
import sorting from "../images/sorting.svg"

const TaskManager = () => {
    return (
        <>
            <div className="navbar navbar-expand">
                <div className="container-fluid p-0">
                    <a>
                        <div className='d-flex'>
                            <h4 className='mt-3 ms-5' style={{ "fontWeight": "600" }}>Tasks Manager</h4>
                            <img className='btn mt-3 p-0' src={columns} style={{ "width": "1.5rem", "height": "1.5rem", "marginLeft": "7rem" }} />
                            <span className='mt-3 ms-2'>Kanban View</span>
                        </div>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span style={{ "fontSize": "1rem" }}>
                                Sort by (Default)
                            </span>
                            <img className='btn p-0 me-3' src={sorting} style={{ "width": "1.5rem" }} />
                        </li>
                        <li className="nav-item">
                            <img className='btn p-0 me-3' src={lines} style={{ "width": "1.5rem" }} />
                        </li>
                        <li className="nav-item">
                            <img className='btn p-0 me-3' src={hierarchy} style={{ "width": "1.5rem" }} />
                        </li>
                        <li className="nav-item">
                            <img className='btn p-0 me-3' src={calendar} style={{ "width": "1.5rem" }} />
                        </li>
                        <li className="nav-item">
                            <img className='btn p-0 me-5' src={menu} style={{ "width": "1.5rem", "height": "1.5rem" }} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TaskManager