import React, { useState, useEffect } from "react";
import "../../../styles/VoidReason.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
const ModalVoid = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  handleSubmit,
  unmountedStyle,
  upStyle,
}) => {
  const { voidItem } = useSelector(
    (state) => state.postReducer
  );
  const [voidName, setVoidName] = useState('')
  const [branchName, setBranchName] = useState('')
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
  let resetForm=()=>{
    toggleClose()
    document.getElementById("add-void-form").reset()

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
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-void-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-void">
        <form id="add-void-form" className="modal-void-form" type="submit" onSubmit={(e) =>
          handleSubmit(
            e,
            voidItem.length + 1,
            voidName,
            branchName,
            creationDate,
            modDate
          )
        }>
          <div className="modal-void-header">
            Add New Void Reason
            <div onClick={() => resetForm()}>
              <CloseIcon className="modal-void-close" />
            </div>
          </div>
          <div className="modal-void-body">
            <div className="modal-void-subtitle">General</div>
            <div className="modal-void-desc">
              Description*
              <input
                required
                onChange={(e) => setVoidName(e.target.value)}
                placeholder="Void description"
                className="modal-void-desc-input"
              />
            </div>
            <div className="modal-void-subtitle">Branch Exceptions</div>
            <div className="modal-void-desc">
              <div className="modal-void-desc-hor">
                <input value="branch1" onChange={(e) => setBranchName(e.target.value)} type="checkbox" className="modal-check"></input>
                Branch 1
              </div>
              <div className="modal-void-desc-hor">
                <input value="branch2" onChange={(e) => setBranchName(e.target.value)} type="checkbox" className="modal-check"></input>
                Branch 2
              </div>
              <div className="modal-void-desc-hor">
                <input value="branch3" onChange={(e) => setBranchName(e.target.value)} type="checkbox" className="modal-check"></input>
                Branch 3
              </div>
            </div>
          </div>
          <div className="modal-void-footer">
            <input type="submit" value="Save" className="modal-void-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalVoid;
