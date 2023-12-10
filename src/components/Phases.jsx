import more from "../images/more.svg"
import { useState } from 'react'
import NavBar from "./NavBar"

const Phases = () => {

    return (
        <>
            <div className="container p-0">
                <div className='row'>
                    <button className='btn mt-2' style={{ "width": "4.9rem", "fontSize": "0.8rem", "marginLeft": "17rem", "backgroundColor": "#00ABF0", "color": "white", "fontWeight": "500" }}>+ Phase</button>
                </div>
                <div className="row mt-2 ms-2 bg-white rounded-3 " style={{ "width": "21rem" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ "width": "20rem", "height": "5rem" }}>
                        <span style={{ "fontWeight": "600" }}>
                            <span className='btn me-2 rounded-3' style={{ "padding": "0", "width": "1.5rem", "height": "1.5rem", "backgroundColor": "#00ABF0", "fontWeight": "400", "color": "white", "fontSize": "1rem" }} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                +
                            </span>
                            Phase 1
                        </span>
                        <img src={more} className='btn' style={{ "height": "2.5rem" }} />
                    </div>
                    <div className="collapse ms-2 mb-2" id="collapseExample" style={{ "width": "21rem", "whiteSpace": 'wrap' }}>
                        <div>
                            Part 1
                        </div>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                    </div>
                </div >
                <div className="row mt-2 ms-2 bg-white rounded-3" style={{ "width": "21rem" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ "width": "20rem", "height": "5rem" }}>
                        <span style={{ "fontWeight": "600" }}>
                            <span className='btn me-2 rounded-3' style={{ "padding": "0", "width": "1.5rem", "height": "1.5rem", "backgroundColor": "#00ABF0", "fontWeight": "400", "color": "white", "fontSize": "1rem" }} data-bs-toggle="collapse" data-bs-target="#phase2" aria-expanded="false" aria-controls="collapseExample">+ </span>
                            Phase 2
                        </span>
                        <img src={more} className='btn' style={{ "height": "2.5rem" }} />
                    </div>
                    <div className="collapse ms-2 mb-2" id="phase2" style={{ "width": "21rem", "whiteSpace": 'wrap' }}>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                    </div>
                </div >
                <div className="row mt-2 ms-2 bg-white rounded-3" style={{ "width": "21rem" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ "width": "20rem", "height": "5rem" }}>
                        <span style={{ "fontWeight": "600" }}>
                            <span className='btn me-2 rounded-3' style={{ "padding": "0", "width": "1.5rem", "height": "1.5rem", "backgroundColor": "#00ABF0", "fontWeight": "400", "color": "white", "fontSize": "1rem" }} data-bs-toggle="collapse" data-bs-target="#production" aria-expanded="false">+ </span>
                            Production
                        </span>
                        <img src={more} className='btn' style={{ "height": "2.5rem" }} />
                    </div>
                    <div className="collapse ms-2 mb-2" id="production" style={{ "width": "21rem", "whiteSpace": 'wrap' }}>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                    </div>
                </div >
                <div className="row mt-2 ms-2 bg-white rounded-3" style={{ "width": "21rem" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ "width": "20rem", "height": "5rem" }}>
                        <span style={{ "fontWeight": "600" }}>
                            <span className='btn me-2 rounded-3' style={{ "padding": "0", "width": "1.5rem", "height": "1.5rem", "backgroundColor": "#00ABF0", "fontWeight": "400", "color": "white", "fontSize": "1rem" }} data-bs-toggle="collapse" data-bs-target="#phase4" aria-expanded="true">+ </span>
                            Phase 4
                        </span>
                        <img src={more} className='btn' style={{ "height": "2.5rem" }} />
                    </div>
                    <div className="collapse ms-2 mb-2" id="phase4" style={{ "width": "21rem", "whiteSpace": 'wrap' }}>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                    </div>
                </div >
                <div className="row mt-2 ms-2 bg-white rounded-3" style={{ "width": "21rem" }}>
                    <div className="d-flex justify-content-between align-items-center" style={{ "width": "20rem", "height": "5rem" }}>
                        <span style={{ "fontWeight": "600" }}>
                            <span className='btn me-2 rounded-3' style={{ "padding": "0", "width": "1.5rem", "height": "1.5rem", "backgroundColor": "#00ABF0", "fontWeight": "400", "color": "white", "fontSize": "1rem" }} data-bs-toggle="collapse" data-bs-target="#pre" aria-expanded="true">+ </span>
                            Pre-Production
                        </span>
                        <img src={more} className='btn' style={{ "height": "2.5rem" }} />
                    </div>
                    <div className="collapse ms-2 mb-2" id="pre" style={{ "width": "21rem", "whiteSpace": 'wrap' }}>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                        <div>BAHsddee</div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Phases