import React, { useEffect, useState } from "react";
import "../../../styles/Roles.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const ModalRole = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit,
}) => {
  const { roleData } = useSelector((state) => state.postReducer);
  const [roleName, setRoleName] = useState('')
  const [fromTable, setFromTable] = useState('')
  const [toTable, setToTable] = useState('')

  useEffect(() => {

  }, []);

  let resetForm = () => {
    toggleClose()
    document.getElementById("add-role-form").reset()
    

  }

  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-role-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-role">
        <form
          id="add-role-form"
          className="modal-role-form"
          type="submit"
          onSubmit={(e) =>
            handleSubmit(
              e,
              uuidv4(),
              roleName,
              fromTable,
              toTable,

            )
          }
        >
          <div className="modal-role-header">
            Add New Role
            <div onClick={() => resetForm()}>
              <CloseIcon className="modal-role-close" />
            </div>
          </div>
          <div className="modal-role-body">
            <div className="modal-role-subtitle">General</div>
            <div className="modal-role-desc">
              Description*
              <input
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
                  onChange={(e) => setFromTable(e.target.value)}
                  required className="modal-role-desc-input" />
              </div>
              <div className="modal-role-desc">
                To which table*
                <input
                  onChange={(e) => setToTable(e.target.value)}
                  required className="modal-role-desc-input" />
              </div>
            </div>
          </div>
          <div className="modal-role-footer">
            <input type="submit" value="Save" className="modal-role-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalRole;
