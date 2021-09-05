import React from "react";
import CalendarViewDay from "@material-ui/icons/CalendarToday";

import "../../../styles/EmpSchedule.css";

const TableEmpSchedule = ({
    employeeId,
    name,
    handleSchedule
}) => {
    return (
        <div className="emp-table-holder">
            <div id={"" + name} className="emp-holder">
                <div className="emp-name">{name}</div>
            </div>
            <div className="emp-group1">
                <div>
                    <CalendarViewDay
                        onClick={() => handleSchedule(employeeId)}
                        className="emp-modify-icon"
                    />
                </div>
            </div>
         
        </div>
    );
};

export default TableEmpSchedule;
