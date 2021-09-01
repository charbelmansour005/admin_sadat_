import React, { useState, useEffect } from "react";
import "../../../styles/Divisions.css";
import CloseIcon from "@material-ui/icons/Close";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
const ModalDivision = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit
}) => {


  const { divisionItems } = useSelector(
    (state) => state.postReducer
  );
  const [divId, setDivId] = useState('')
  const [divisionName, setDivisionName] = useState('')
  const [category, setCategory] = useState('')
  const [creationDate, setCreationDate] = useState('')
  const [modDate, setModDate] = useState('')

  useEffect(() => {
    getCreatedDate()
    getModificationDate()
  }, []);

  let getCreatedDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;
    setCreationDate(completeDateFormat)


  }
  let getModificationDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var completeDateFormat = date + "/" + month + "/" + year;

    setModDate(completeDateFormat)
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-division-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-division">
        <form className="modal-division-form" type="submit" onSubmit={(e) =>
          handleSubmit(
            e,
            divId,
            divisionItems.length + 1,
            divisionName,
            category,
            creationDate,
            modDate
          )
        } >
          <div className="modal-division-header">
            Add New Division
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-division-close" />
            </div>
          </div>
          <div className="modal-division-body">
            <div className="modal-division-subtitle">General</div>
            <div className="modal-division-price">
              <div className="modal-division-desc">
                Division ID*
                <input
                  onChange={(e) => setDivId(e.target.value)}
                  required
                  type="number"
                  placeholder="0"
                  className="modal-division-price-input"
                />
              </div>
              <div className="modal-division-desc">
                Division Name*
                <input
                  onChange={(e) => setDivisionName(e.target.value)}
                  required
                  placeholder="Division name"
                  className="modal-division-desc-input"
                />
              </div>
              <div className="modal-division-desc">
                Category*
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="modal-division-function-input"
                  defaultValue={"Select category"}
                >
                  <option value="Select category" disabled>
                    Select category
                  </option>
                  <option className="modal-division-function-option" value="1">
                    1
                  </option>
                  <option className="modal-division-function-option" value="2">
                    2
                  </option>
                  <option className="modal-division-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <AddBoxIcon
                 onClick={() => {
                  openInNewTab("http://localhost:3000/Home#/Categories");
                }}
               className="add-box" />
            </div>
          </div>
          <div className="modal-division-footer">
            <input type="submit" value="Save" className="modal-division-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDivision;
