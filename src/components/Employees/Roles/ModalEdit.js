import React, { useEffect, useState } from "react";
import "../../../styles/Employees.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalEdit = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  currentitem,
}) => {
  const { catItem } = useSelector((state) => state.postReducer);
  const [catName, setCatName] = useState("");
  const [othercatName, setOtherCat] = useState("");
  const [sorting, setSorting] = useState("");
  useEffect(() => {}, []);

  let updateEmployee = (catId) => {
    if (catItem.length > 0) {
      catItem.map((item) => {
        if (item.catId === catId)
          if (catName === "") {
            item.name = currentitem.name;
          } else {
            item.name = catName;
          }
        if (othercatName === "") {
          item.othername = currentitem.othername;
        } else {
          item.othername = othercatName;
        }
        if (sorting === "") {
          item.sorting = currentitem.sorting;
        } else {
          item.sorting = sorting;
        }
      });
    }

    toggleClose();
  };

  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-emp-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-cat">
        <form className="modal-emp-form" type="submit">
          <div className="modal-emp-header">
            Edit Employee
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-emp-close" />
            </div>
          </div>
          <div className="modal-emp-body">
            <div className="modal-emp-subtitle">General</div>

            <div className="modal-spacer"></div>
            <div className="modal-emp-desc">
              Category*
              <input
                defaultValue={currentitem.name}
                required
                onChange={(e) => setCatName(e.target.value)}
                placeholder="Category name"
                className="modal-emp-desc-input"
              />
            </div>
            <div className="modal-emp-desc">
              Other name*
              <input
                defaultValue={currentitem.othername}
                onChange={(e) => setOtherCat(e.target.value)}
                required
                placeholder="Other name"
                className="modal-emp-desc-input"
              />
            </div>
            <div className="modal-emp-desc">
              Sorting*
              <input
                defaultValue={currentitem.sorting}
                onChange={(e) => setSorting(e.target.value)}
                required
                placeholder="Sorting"
                className="modal-emp-desc-input"
              />
            </div>
          </div>
          <div className="modal-emp-footer">
            <input
              value="Edit"
              onClick={() => updateEmployee(currentitem.catId)}
              className="modal-emp-save"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
