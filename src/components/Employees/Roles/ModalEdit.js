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
  const { roleData } = useSelector((state) => state.postReducer);
  const [roleName, setRoleName] = useState('')
  const [fromTable, setFromTable] = useState('')
  const [toTable, setToTable] = useState('')
  useEffect(() => { }, []);

  let updateRole = (roleId) => {
    if (roleData.length > 0) {
      roleData.map((item) => {
        if (item.roleId === roleId) {


          if (roleName === "") {
            item.name = currentitem.name;
          } else {
            item.name = roleName;
          }
          if (fromTable === "") {
            item.fromTable = currentitem.fromTable;
          } else {
            item.fromTable = fromTable;
          }
          if (toTable === "") {
            item.toTable = currentitem.toTable;
          } else {
            item.toTable = toTable;
          }
        }
      });
    }

    toggleClose();
  };

  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-role-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-role">
        <form
          className="modal-role-form"
          type="submit"

        >
          <div className="modal-role-header">
            Edit Role
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-role-close" />
            </div>
          </div>
          <div className="modal-role-body">
            <div className="modal-role-subtitle">General</div>
            <div className="modal-role-desc">
              Description*
              <input
                defaultValue={currentitem.name}
                onChange={(e) => setRoleName(e.target.value)}
                required
                placeholder="Role description"
                className="modal-role-desc-input"
              />
            </div>
            <div className="modal-role-price">
              <div className="modal-role-desc">
                From which table*
                <input
                  defaultValue={currentitem.fromTable}
                  onChange={(e) => setFromTable(e.target.value)}
                  required className="modal-role-desc-input" />
              </div>
              <div className="modal-role-desc">
                To which table*
                <input
                  defaultValue={currentitem.toTable}
                  onChange={(e) => setToTable(e.target.value)}
                  required className="modal-role-desc-input" />
              </div>
            </div>
          </div>
          <div className="modal-role-footer">
            <input type="submit" value="Save" onClick={() => updateRole(currentitem.roleId)} className="modal-role-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
