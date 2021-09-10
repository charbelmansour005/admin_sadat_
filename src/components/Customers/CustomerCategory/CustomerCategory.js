import { useState, useEffect } from "react";
import "../../../App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/CustomerCategory.css";
import TableCustomerCategory from "./TableCustomerCategory";
import HeaderCustomerCategory from "./HeaderCustomerCategory";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteCustomerCategory,
} from "../../../redux/actions";
import ModalCustomerCategory from "./ModalCustomerCategory";
import EditCustomerCategory from "./EditCustomerCategory";




const CustomerCategory = (props) => {
    const [modal, setModal] = useState(false);
    const [tData, setTData] = useState([]);
    const [sortName, setSortName] = useState("0");
    const [first, setFirst] = useState(true);
    const [currentItem, setCurrentItem] = useState({});
    const [modalEdit, setModalEdit] = useState(false);
    const dispatch = useDispatch();
    const { customerCategory } = useSelector((state) => state.postReducer);

    const deleteCustCategory = (customerCategoryId) => dispatch(deleteCustomerCategory(customerCategoryId));


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
    useEffect(() => {


        document.addEventListener("keydown", (e) => {
            e.key === "Escape" && setModal(false);
            if (e.key === "+") {
                setModal(true);
                setFirst(false);
            }
        });
        return () => {
            document.removeEventListener("keydown", (e) => e);
        };
    }, [modal]);
    useEffect(() => {
        if (modal) {
            document.getElementById("search-text").tabIndex = -1;
        } else {
            document.getElementById("search-text").tabIndex = 1;
        }
    }, [modal]);
    function toggleModal() {
        setModal((prev) => !prev);
        setFirst(false);
    }
    function toggleEditModal() {
        setModalEdit((prev) => !prev);
        setModalEdit(false);
    }
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
            setTData(customerCategory)
        }
    }

    const handleDelete = (customerCategoryId) => {
        customerCategory.map((item) => {
            if (item.customerCategoryId === customerCategoryId) {
                deleteCustCategory(customerCategoryId);
            }
        });
        setTData(customerCategory)
    };
    const handleEdit = (customerCategoryId) => {
        customerCategory.map((item) => {
            if (item.customerCategoryId === customerCategoryId) {
                setCurrentItem(item);
                setModalEdit(true);
                setModal(false);
                setFirst(true);
            }
        });
        setTData(customerCategory)
    };
    useEffect(() => {
        setTData(customerCategory);
        return () => { };
    }, [customerCategory]);

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
    const handleModalSubmit = (
        e,
        customerCategoryId,
        name,

    ) => {
        e.preventDefault();
        let newItem = {

            customerCategoryId: customerCategoryId,
            name: name,

        };
        customerCategory.push(newItem);
        setTData(customerCategory)
        toggleModal();
        e.target.reset();
    };

    return (
        <div id="App" style={{ width: "100%", height: "100%" }}>
            <h1 className="cur-title">Customer Category</h1>
            <div className="cur-category-box">
                <div className="cur-search-box">
                    <div className="cur-search">
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
                            className="cur-search-text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="item-right">
                        <div className="cur-add" onClick={() => toggleModal()}>
                            <AddIcon
                                style={{
                                    marginLeft: "2px",
                                    color: "white",
                                    height: "25px",
                                    width: "25px",
                                    alignSelf: "center",
                                    justifySelf: "center",
                                }}
                            />
                            <p>New</p>
                        </div>
                    </div>
                </div>
                <div className="cur-table">
                    <HeaderCustomerCategory name="Name" sortName={sortName} sortBy={sortBy} />
                    <TransitionGroup className="cur-remove-items">
                        {tData.map(({ name, customerCategoryId }) => (
                            <CSSTransition
                                key={customerCategoryId}
                                timeout={500}
                                classNames="cur-trans"
                            >
                                <TableCustomerCategory
                                    name={name}
                                    customerCategoryId={customerCategoryId}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
            {!first ? (
                <ModalCustomerCategory
                    toggleClose={toggleModal}
                    mod={modal}
                    handleSubmit={handleModalSubmit}
                    mountedStyle={mountedStyle}
                    unmountedStyle={unmountedStyle}
                    downStyle={downStyle}
                    upStyle={upStyle}
                />
            ) : null}
            {modalEdit ? (
                <EditCustomerCategory
                    toggleClose={toggleEditModal}
                    mod={modalEdit}
                    currentitem={currentItem}
                    mountedStyle={mountedStyle}
                    unmountedStyle={unmountedStyle}
                    downStyle={downStyle}
                    upStyle={upStyle}
                />
            ) : null}
        </div>
    );
};
export default CustomerCategory;
