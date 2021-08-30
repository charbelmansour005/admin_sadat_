import { useState, useEffect } from "react";
import "../../../App.css";
import ModalRole from "./ModalRole";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../../styles/Roles.css";
import TableRole from "./TableRole";
import HeaderRole from "./HeaderRole";
import SearchIcon from "@material-ui/icons/Search";
import ModalEdit from "./ModalEdit";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { catPost, deleteCat, searchCat } from "../../../redux/actions";

const Roles = () => {
  const [modal, setModal] = useState(false);
  const [tData, setTData] = useState([]);
  const [sortName, setSortName] = useState("0");
  const [first, setFirst] = useState(true);
  const [currentItem, setCurrentItem] = useState({});
  const [modalEdit, setModalEdit] = useState(false);
  const { catItem } = useSelector((state) => state.postReducer);
  const addCategories = () => dispatch(catPost());
  const deleteCateg = (id) => dispatch(deleteCat(id));
  const searchCateg = (name) => dispatch(searchCat(name));
  const dispatch = useDispatch();

  useEffect(() => {
    addCategories();
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
    setTData(catItem);
  }, []);
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
  const handleSearch = (e) => {
    if (e.target.value === "") {
      addCategories();
    } else {
      searchCateg(e.target.value);
    }
  };

  const handleDelete = (catId) => {
    catItem.map((item) => {
      if (item.catId === catId) {
        deleteCateg(catId);
      }
    });
  };

  const handleEdit = (catId) => {
    catItem.map((item) => {
      if (item.catId === catId) {
        setCurrentItem(item);
        setModalEdit(true);
        setModal(false);
        setFirst(true);
      }
    });
  };

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
    catId,
    pDefinedCat,
    name,
    othername,
    sorting,
    role,
    func
  ) => {
    e.preventDefault();
    let newItem = {
      key: tData.length,
      catId: catId,
      pDefinedCat: pDefinedCat,
      name: name,
      othername: othername,
      sorting: sorting,
      role: role,
      func: func,
    };
    catItem.push(newItem);

    toggleModal();
    e.target.reset();
  };
  return (
    <div id="App" style={{ width: "100%", height: "100%" }}>
      <h1 className="role-title">Roles</h1>
      <div className="role-box">
        <div className="role-search-box">
          <div className="role-search">
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
              className="role-search-text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <div className="role-add" onClick={() => toggleModal()}>
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
        <div className="role-table">
          <HeaderRole
            name="Name"
            role="Role"
            func="Function"
            sortName={sortName}
            sortBy={sortBy}
          />
          <TransitionGroup className="role-remove-items">
            {catItem.map(({ key, catId, name }) => (
              <CSSTransition key={key} timeout={500} classNames="role-trans">
                <TableRole
                  key={key}
                  name={name}
                  catId={catId}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      {!first ? (
        <ModalRole
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
export default Roles;
