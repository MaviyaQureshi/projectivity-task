import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Phases from "./Phases";
import TaskManager from "./TaskManager";
import Kanban from "./Kanban"

// #F4F6FF

function Structure() {

    return (
        <>
            <div style={{ "backgroundColor": "#F4F6FF", "height": "100%", "fontFamily": "Poppins" }}>
                <div className="col" style={{ "position": "fixed", "right": "1", "width": "94%", "position": "fixed", "right": "0" }}>
                    <div className="row">
                        <NavBar />
                    </div>
                    <div className="row">
                        <TaskManager />
                    </div>
                    <div className="row d-flex justify-content-center" style={{ "width": "fit-content" }}>
                        <div className="col-3 pe-0">
                            <Phases />
                        </div>
                        <div className="col p-0">
                            <Kanban />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <SideBar />
                </div>
            </div>
        </>
    );
}

export default Structure;
