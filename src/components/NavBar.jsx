import React from 'react'
import lady from "../images/lady.jpg"
import Vectordropdown from "../images/Vectordropdown.png"
import reminder from "../images/reminder.png"
import msg from "../images/msg.png"
import notification_center from "../images/notification_center.png"
import search from "../images/search.png"
import roundPlus from "../images/roundPlus.svg"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-white">
                <div className="container-fluid m-0 mb-2 justify-content-end p-0">
                    {/* NavBar items */}
                    <ul className="navbar-nav d-flex flex-row">
                        {/* Icons */}
                        <li className="nav-item">
                            <div className="btn shadow p-3 bg-md-white rounded-5 me-4 mt-2">
                                <img src={search} style={{ "height": "1.5rem", "width": "1.5rem" }} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn shadow p-3 bg-white rounded-5 me-4 mt-2">
                                <img src={notification_center} style={{ "height": "1.5rem", "width": "1.5rem" }} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn shadow p-3 bg-white rounded-5 me-4 mt-2">
                                <img src={msg} style={{ "height": "1.5rem", "width": "1.5rem" }} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn shadow p-3 bg-white rounded-5 me-4 mt-2">
                                <img src={reminder} style={{ "height": "1.5rem", "width": "1.5rem" }} />
                            </div>
                        </li>
                        {/* Profile */}
                        <div className="btn rounded-5 bg-white me-2 mt-2 d-flex align-items-centers shadow bg-white" style={{ "width": "14rem", "height": "3.5rem" }}>
                            <img src={lady} style={{ "height": "2.5rem", "width": "2.5rem" }} className='rounded-5' />
                            <div className='row ms-2'>
                                <div className="col">
                                    <div className="row" style={{ "fontWeight": "500" }}>
                                        Jane Doe
                                    </div>
                                    <div className="row" style={{ "fontSize": "0.7rem", "marginTop": "-0.2rem" }}>
                                        Line producer
                                    </div>
                                </div>
                            </div>
                            <img src={Vectordropdown} style={{ "height": "0.75rem", "width": "1.2rem", "marginLeft": "4rem" }} className='mt-3' />
                        </div>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default NavBar