import React from "react";
import "../../../styles/Groups.css";
import CloseIcon from "@material-ui/icons/Close";

const ModalGroup = ({
  mod,
  mountedStyle,
  toggleClose,
  downStyle,
  unmountedStyle,
  upStyle,
}) => {
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-grp-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-grp">
        <form className="modal-grp-form" type="submit">
          <div className="modal-grp-header">
            Add New Group
            <div onClick={() => toggleClose()}>
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
                  placeholder="Group name"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Other Name
                <input
                  placeholder="Other name"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Division*
                <select
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
                <input type="checkbox" className="modal-check"></input>
                Tax1
              </div>
              <div className="modal-grp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Tax2
              </div>
              <div className="modal-grp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Tax3
              </div>
            </div>
            <div className="modal-grp-price">
              <div className="modal-grp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Tax4
              </div>
              <div className="modal-grp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Tax5
              </div>
              <div className="modal-grp-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Service
              </div>
            </div>
            <div className="modal-grp-subtitle">Accounts</div>
            <div className="modal-grp-price">
              <div className="modal-grp-desc">
                Discount Account
                <input
                  placeholder="Discount account"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Revenue Account
                <input
                  placeholder="Revenue account"
                  className="modal-grp-desc-input"
                />
              </div>
              <div className="modal-grp-desc">
                Expense Account
                <input
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
                <select className="modal-grp-function-input" defaultValue={""}>
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
                  placeholder="Sorting on PDA"
                  className="modal-grp-desc-input"
                />
              </div>
            </div>
            <div className="modal-grp-desc-hor">
              <input type="checkbox" className="modal-check"></input>
              Hide this group on the PDA menu
            </div>
            <div className="modal-grp-desc-hor">
              <input type="checkbox" className="modal-check"></input>
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
