import React, { useState, useEffect } from "react";
import "../../../styles/Groups.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const ModalGroup = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
  handleSubmit
}) => {
  const { groupItems } = useSelector(
    (state) => state.postReducer
  );

  const [groupName, setGroupName] = useState('')
  const [othername, setOtherName] = useState('')
  const [division, setDivision] = useState('')
  const [tax1, setTax1] = useState('')
  const [tax2, setTax2] = useState('')
  const [tax3, setTax3] = useState('')
  const [tax4, setTax4] = useState('')
  const [tax5, setTax5] = useState('')
  const [service, setService] = useState('')
  const [discount, setDiscount] = useState('')
  const [revenue, setRevenue] = useState('')
  const [expense, setExpense] = useState('')
  const [pdaDesc, setPdaExpense] = useState('')
  const [pdaSorting, setPdaSorting] = useState('')
  const [pdaHideMenu, setPdaHideMenu] = useState('')
  const [groupRemark, setGroupRemark] = useState('')
  const [creationDate, setCreationDate] = useState('')
  const [modDate, setModDate] = useState('')

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
  let resetForm = () => {
    toggleClose()
    document.getElementById("add-group-form").reset()

  }
  useEffect(() => {
    getCreatedDate()
    getModificationDate()
  }, []);
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-grp-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-grp">
        <form id="add-group-form" className="modal-grp-form" type="submit" onSubmit={(e) =>
          handleSubmit(
            e,
            groupName,
            uuidv4(),
            othername,
            division,
            tax1,
            tax2,
            tax3,
            tax4,
            tax5,
            service,
            discount,
            revenue,
            expense,
            pdaDesc,
            pdaSorting,
            pdaHideMenu,
            groupRemark,
            creationDate,
            modDate,

          )
        } >
          <div className="modal-grp-header">
            Add New Group
            <div onClick={() => resetForm()}>
              <CloseIcon className="modal-grp-close" />
            </div>
          </div>
          <div className="modal-grp-body">
            <div className="modal-grp-subtitle">General</div>
            <div className="modal-grp-price">
              <div className="modal-grp-desc">
                Group Name*
                <input
                  required
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="Group name"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Other Name
                <input
                  onChange={(e) => setOtherName(e.target.value)}
                  placeholder="Other name"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Division*
                <select
                  onChange={(e) => setDivision(e.target.value)}
                  required
                  className="modal-grp-function-input"
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Select division
                  </option>
                  <option className="modal-grp-function-option" value="1">
                    1
                  </option>
                  <option className="modal-grp-function-option" value="2">
                    2
                  </option>
                  <option className="modal-grp-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
            </div>
            <div className="modal-division-subtitle">Tax + Service</div>
            <div className="modal-grp-price">
              <div className="modal-grp-desc-hor">
                <input value="tax1" onChange={(e) => setTax1(e.target.value)} type="checkbox" className="modal-check"></input>
                Tax1
              </div>
              <div className="modal-grp-desc-hor">
                <input value="tax2" onChange={(e) => setTax2(e.target.value)} type="checkbox" className="modal-check"></input>
                Tax2
              </div>
              <div className="modal-grp-desc-hor">
                <input value="tax3" onChange={(e) => setTax3(e.target.value)} type="checkbox" className="modal-check"></input>
                Tax3
              </div>
            </div>
            <div className="modal-grp-price">
              <div className="modal-grp-desc-hor">
                <input value="tax4" onChange={(e) => setTax4(e.target.value)} type="checkbox" className="modal-check"></input>
                Tax4
              </div>
              <div className="modal-grp-desc-hor">
                <input value="tax5" onChange={(e) => setTax5(e.target.value)} type="checkbox" className="modal-check"></input>
                Tax5
              </div>
              <div className="modal-grp-desc-hor">
                <input value="service" onChange={(e) => setService(e.target.value)} type="checkbox" className="modal-check"></input>
                Service
              </div>
            </div>
            <div className="modal-grp-subtitle">Accounts</div>
            <div className="modal-grp-price">
              <div className="modal-grp-desc">
                Discount Account
                <input
                  type="number"
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Discount account"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Revenue Account
                <input
                  type="number"
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="Revenue account"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Expense Account
                <input
                  type="number"
                  onChange={(e) => setExpense(e.target.value)}
                  placeholder="Expense account"
                  className="modal-grp-desc-input"
                />
              </div>
            </div>
            <div className="modal-grp-subtitle">PDA</div>
            <div
              className="modal-grp-price"
              style={{ marginLeft: "70px", marginRight: "70px" }}
            >
              <div className="modal-grp-desc">
                PDA Menu
                <select
                  onChange={(e) => setPdaExpense(e.target.value)}
                  className="modal-grp-function-input" defaultValue={""}>
                  <option value="" disabled>
                    Select PDA menu
                  </option>
                  <option className="modal-grp-function-option" value="1">
                    1
                  </option>
                  <option className="modal-grp-function-option" value="2">
                    2
                  </option>
                  <option className="modal-grp-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <div className="modal-grp-desc">
                Sorting on PDA
                <input
                  onChange={(e) => setPdaSorting(e.target.value)}
                  placeholder="Sorting on PDA"
                  className="modal-grp-desc-input"
                />
              </div>
            </div>
            <div className="modal-grp-desc-hor">
              <input value="pdaHide" onChange={(e) => setPdaHideMenu(e.target.value)} type="checkbox" className="modal-check"></input>
              Hide this group on the PDA menu
            </div>
            <div className="modal-grp-desc-hor">
              <input value="isGroupRemark" onChange={(e) => setGroupRemark(e.target.value)} type="checkbox" className="modal-check"></input>
              This group is a Remark (Modify)
            </div>
          </div>
          <div className="modal-grp-footer">
            <input type="submit" value="Save" className="modal-grp-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalGroup;
