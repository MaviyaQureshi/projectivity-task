import React from 'react'
import logo from "../images/logo.jpg"
import pie from "../images/pie.svg"
import id from "../images/id.svg"
import plane from "../images/plane.svg"
import folder from "../images/folder.svg"
import checklist from "../images/checklist.svg"
import settings from "../images/settings.svg"

const SideBar = () => {
    return (
        <>
            <div className="col bg-white m-0" style={{ "width": "6%" }}>
                <div className="row m-0">
                    <img src={logo} className='mb-3 mt-3' style={{ "height": "4rem", "width": "6rem" }} />
                </div>
                <div className="row m-0">
                    <img src={pie} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "4rem" }} />
                </div>
                <div className="row m-0">
                    <img src={id} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={id} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={id} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={id} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={plane} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={folder} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={folder} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={checklist} className='btn' style={{ "height": "2.2rem", "width": "100%", "marginTop": "1rem" }} />
                </div>
                <div className="row m-0">
                    <img src={settings} className='btn' style={{ "height": "2.5rem", "width": "100%", "marginTop": "8rem" }} />
                </div>
            </div>
        </>
    )
}

export default SideBar