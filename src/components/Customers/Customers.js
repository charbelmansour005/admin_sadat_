import { useState, useEffect } from "react";
import "../../App.css";
import ModalCustomer from "./ModalCustomer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../styles/Customers.css";
import TableCustomer from "./TableCustomer";
import HeaderCustomer from "./HeaderCustomer";
import SearchIcon from "@material-ui/icons/Search";
import ModalEdit from "./ModalEdit";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, deleteCustomer, searchCustomer, importCustomersData } from "../../redux/actions";
import { useJsonToCsv } from "react-json-csv";
import Papa from "papaparse";
const Customers = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortFirstName, setSortFirstName] = useState("0");
  const [sortLastName, setSortLastName] = useState("0");
  const [sortCompany, setSortCompany] = useState("0");
  const [sortPhone, setSortPhone] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);

  const { customerData } = useSelector((state) => state.postReducer);
  const addCustomers = () => dispatch(addCustomer());
  const deleteCustomers = (id) => dispatch(deleteCustomer(id));
  const searchCustomers = (name) => dispatch(searchCustomer(name));
  const dispatch = useDispatch();
  const importCustomers = (item) => dispatch(importCustomersData(item))

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
  useEffect(() => {
    setTData(customerData);
  }, [customerData]);
  function toggleModal() {
    setModal((prev) => !prev);
    setFirst(false);
  }
  function toggleEditModal() {
    setModalEdit((prev) => !prev);
    setModalEdit(false);
  }

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
      setTData(customerData)
    }
  }

  const handleDelete = (customerId) => {
    customerData.map((item) => {
      if (item.customerId === customerId) {
        deleteCustomers(customerId);
      }
    });
    setTData(customerData)
  };

  const handleEdit = (customerId) => {
    customerData.map((item) => {
      if (item.customerId === customerId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
    setTData(customerData)
  };

  const sortBy = (sort) => {
    if (sort === "name") {
      if (sortFirstName === "0") {
        setSortFirstName("1");
        setSortLastName("0");
        setSortCompany("0");
        setSortPhone("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("name"));
        });
      } else if (sortFirstName === "1") {
        setSortFirstName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("name"));
        });
      } else setSortFirstName("0");
    } else if (sort === "lastName") {
      if (sortLastName === "0") {
        setSortFirstName("0");
        setSortLastName("1");
        setSortCompany("0");
        setSortPhone("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("lastName"));
        });
      } else if (sortLastName === "1") {
        setSortLastName("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("lastName"));
        });
      } else setSortLastName("0");
    } else if (sort === "company") {
      if (sortCompany === "0") {
        setSortFirstName("0");
        setSortLastName("0");
        setSortCompany("1");
        setSortPhone("0");
        setTData((prev) => {
          return prev.sort(GetSortOrder("company"));
        });
      } else if (sortCompany === "1") {
        setSortCompany("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("company"));
        });
      } else setSortCompany("0");
    } else if (sort === "phoneNumber") {
      if (sortPhone === "0") {
        setSortFirstName("0");
        setSortLastName("0");
        setSortCompany("0");
        setSortPhone("1");
        setTData((prev) => {
          return prev.sort(GetSortOrder("phoneNumber"));
        });
      } else if (sortPhone === "1") {
        setSortPhone("2");
        setTData((prev) => {
          return prev.sort(GetSortOrder2("phoneNumber"));
        });
      } else setSortPhone("0");
    }
  };
  const handleModalSubmit = (
    e,
    customerId,
    title,
    name,
    lastName,
    company,
    group,
    phoneNumber,
    email,
    mobile,
    website,

  ) => {
    e.preventDefault();
    let newItem = {

      customerId: customerId,
      title: title,
      name: name,
      lastName: lastName,
      company: company,
      group: group,
      phoneNumber: phoneNumber,
      email: email,
      mobile: mobile,
      website: website
    };
    customerData.push(newItem);
    setTData(customerData)
    toggleModal();
    e.target.reset();
  };
  const filename = "CustomersData";
  const fields = {
    customerId: "customerId",
    name: "name",
    lastName: "lastName",
    title: "title",
    company: "company",
    group: "group",
    phoneNumber: "phoneNumber",
    email: "email",
    mobile: "mobile",
    website: "website"


  };
  const data = customerData;
  const { saveAsCsv } = useJsonToCsv();
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length != 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          if (results.data[0].hasOwnProperty("customerId")) {
            setTData(results.data)
            importCustomers(results.data)

            try {
              setTData(results.data)
              importCustomers(results.data)

            } catch (error) {
              alert(error);
            }
          }
        },
      });
    }
  };
  return (
    <div id="App" style={{ width: "100%", height: "100%" }}>
      <h1 className="cust-title">Customers</h1>
      <div className="cust-box">
        <div className="cust-search-box">
          <div className="cust-search">
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
              className="cust-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <div className="item-right">
            <label className="item-file-input">
              Import
              <input
                accept=".csv,.xlsx,.xls"
                type="file"
                onInput={(e) => handleFileUpload(e)}
              />
            </label>
            <label
              onClick={() => saveAsCsv({ data, fields, filename })}
              className="item-file-input"
            >
              Export
            </label>
            <div className="cust-add" onClick={() => toggleModal()}>
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
        <div className="cust-table">
          <HeaderCustomer
            name="First Name"
            lastName="Last Name"
            company="Company"
            phoneNumber="Phone"
            sortFirstName={sortFirstName}
            sortLastName={sortLastName}
            sortCompany={sortCompany}
            sortPhone={sortPhone}
            sortBy={sortBy}
          />
          <TransitionGroup className="cust-remove-items">
            {tData.map(
              ({ customerId, name, lastName, company, phoneNumber }) => (
                <CSSTransition key={customerId} timeout={500} classNames="cust-trans">
                  <TableCustomer

                    name={name}
                    customerId={customerId}
                    lastName={lastName}
                    company={company}
                    phoneNumber={phoneNumber}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </CSSTransition>
              )
            )}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalCustomer
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
        <ModalEdit
          toggleClose={toggleEditModal}
          mod={modalEdit}
          currentitem={currentItem}
          mountedStyle={mountedStyle}
          unmountedStyle={unmountedStyle}
          downStyle={downStyle}
          upStyle={upStyle}
        ></ModalEdit>
      ) : null}
    </div>
  );
};
export default Customers;
