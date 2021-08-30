import React, { useEffect, useState } from "react";
import "../../../styles/Roles.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalRole = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit,
}) => {
  const { catItem } = useSelector((state) => state.postReducer);
  const [pDefinedCat, setPDefinedCat] = useState("");
  const [catName, setCatName] = useState("");
  const [othername, setOtherName] = useState("");
  const [sorting, setSorting] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [modDate, setModDate] = useState("");

  useEffect(() => {
    getCreatedDate();
    getModificationDate();
  }, []);

  let getCreatedDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + "/" + month + "/" + year;
  };
  let getModificationDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;

    setModDate(completeDateFormat);
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
          onSubmit={(e) =>
            handleSubmit(
              e,
              catItem.length + 1,
              pDefinedCat,
              catName,
              othername,
              sorting,
              creationDate,
              modDate
            )
          }
        >
          <div className="modal-role-header">
            Add New Role
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-role-close" />
            </div>
          </div>
          <div className="modal-role-body">
            <div className="modal-role-subtitle">General</div>
            <div className="modal-role-desc">
              Description*
              <input
                required
                placeholder="Role description"
                className="modal-role-desc-input"
              />
            </div>
            <div className="modal-role-price">
              <div className="modal-role-desc">
                From which table*
                <input required className="modal-role-desc-input" />
              </div>
              <div className="modal-role-desc">
                To which table*
                <input required className="modal-role-desc-input" />
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
