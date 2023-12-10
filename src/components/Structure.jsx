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
                <div className="col" style={{ "width": "92.4%", "position": "absolute", "right": "0" }}>
                    <div className="row">
                        <NavBar />
                    </div>
                    <div className="row">
                        <TaskManager />
                    </div>
                    <div className="row" style={{ "backgroundColor": "#F4F6FF" }}>
                        <div className="col-3 pe-0">
                            <Phases />
                        </div>
                        <div className="col p-0" style={{ "width": "screen" }}>
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
