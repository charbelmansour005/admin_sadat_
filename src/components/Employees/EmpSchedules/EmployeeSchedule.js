import { useState, useEffect } from "react";
import "../../../App.css";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/EmpSchedule.css";
import TableEmpSchedule from "./TableEmpSchedule";
import HeaderEmpSchedule from "./HeaderEmpSchedule";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import EmpScheduleEdit from './EmpScheduleEdit'
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const EmployeeSchedule = () => {

    const [modalEdit, setModalEdit] = useState(false);
    const [tData, setTData] = useState([]);
    const [sortName, setSortName] = useState("0");
    const [first, setFirst] = useState(true);
    const [currentItem, setCurrentItem] = useState({});
    const { employeeData } = useSelector((state) => state.postReducer);

    useEffect(() => {
        setTData(employeeData);
    }, [employeeData]);
    const mountedStyle = { animation: "inAnimation 500ms ease-in" };
    const unmountedStyle = {
        animation: "outAnimation 500ms ease-out",
        animationFillMode: "forwards",
    };
    const downStyle = { animation: "downAnimation 300ms ease-in" };
    const upStyle = {
        animation: "upAnimation 300ms ease-in ",
        animationFillMode: "forwards",
    };
    function GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    }
    function GetSortOrder2(prop) {
        return function (a, b) {
            if (a[prop] < b[prop]) {
                return 1;
            } else if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        };
    }
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];

        result = tData.filter((data) => {
            return data.name.toLowerCase().includes(value);
        });
        setTData(result);
        if (value === '') {
            setTData(employeeData)
        }
    }
    const handleSchedule = (empId) => {
        employeeData.map((item) => {
            if (item.employeeId === empId) {
                setCurrentItem(item);
                setModalEdit(true);
                // setModal(false);
                // setFirst(true);
            }
        });
        setTData(employeeData)
    };
    function toggleEditModal() {

        setModalEdit(false);
    }

    const sortBy = (sort) => {
        if (sort === "name") {
            if (sortName === "0") {
                setSortName("1");
                setTData((prev) => {
                    return prev.sort(GetSortOrder("name"));
                });
            } else if (sortName === "1") {
                setSortName("2");
                setTData((prev) => {
                    return prev.sort(GetSortOrder2("name"));
                });
            } else setSortName("0");
        }
    };
    return (
        <div id="App" style={{ width: "100%", height: "100%" }}>
            <h1 className="emp-title">Employees Schedules</h1>
            <div className="emp-branch" >
                <select className="branches" defaultValue="All branches">
                    <option>All branches</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="emp-box">
                <div className="emp-search-box">
                    <div className="emp-search">
                        <SearchIcon
                            style={{
                                marginLeft: "2px",
                                color: "rgba(0, 0, 0, 0.7)",
                                height: "25px",
                                width: "25px",
                                alignSelf: "center",
                                justifySelf: "center",
                            }}
                        />
                        <input
                            id="search-text"
                            type="text"
                            className="emp-search-text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                    </div>


                </div>
                <div className="emp-table">
                    <HeaderEmpSchedule
                        name="Employee Name"
                        sortName={sortName}
                        sortBy={sortBy}
                    />
                    <TransitionGroup className="emp-remove-items">
                        {tData.map(({ employeeId, name }) => (
                            <CSSTransition key={employeeId} timeout={500} classNames="emp-trans">
                                <TableEmpSchedule
                                    employeeId={employeeId}
                                    name={name}
                                    handleSchedule={handleSchedule}
                                // handleDelete={handleDelete}
                                // handleEdit={handleEdit}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>


            {modalEdit ? (
                <EmpScheduleEdit
                    toggleClose={toggleEditModal}
                    mod={modalEdit}
                    currentitem={currentItem}
                    mountedStyle={mountedStyle}
                    unmountedStyle={unmountedStyle}
                    downStyle={downStyle}
                    upStyle={upStyle}
                ></EmpScheduleEdit>
            ) : null}
        </div>
    )

}
export default EmployeeSchedule;