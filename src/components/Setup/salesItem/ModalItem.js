import React from "react";
import "../../../styles/Items.css";
import CloseIcon from "@material-ui/icons/Close";

const ModalItem = ({ mod, mountedStyle, toggleClose }) => {
  return (
    <div style={mod ? mountedStyle : null} className="modal-item-wrapper">
      <div className="modal-item">
        <form className="modal-item-form" type="submit">
          <div className="modal-item-header">
            Add New Item
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-item-close" />
            </div>
          </div>
          <div className="modal-item-body">
            <div className="modal-item-subtitle">General</div>
            {/*Description field*/}
            <div className="modal-item-desc">
              Description*
              <input
                required
                placeholder="Item description"
                className="modal-item-desc-input"
              />
            </div>
            {/**/}
            {/*Menu description field*/}
            <div className="modal-item-desc">
              Menu Description*
              <input
                required
                placeholder="Menu description"
                className="modal-item-desc-input"
              />
            </div>
            {/**/}
            {/*Kitchen description field*/}
            <div className="modal-item-desc">
              Kitchen Description*
              <input
                required
                placeholder="Kitchen description"
                className="modal-item-desc-input"
              />
            </div>
            {/**/}
            <div className="modal-spacer"></div>
            {/*Prices fields*/}
            <div className="modal-item-price">
              <div className="modal-item-desc">
                Price 1
                <input placeholder="0" className="modal-item-price-input" />
                <input className="modal-item-price-input" />
              </div>
              <div className="modal-item-desc">
                Price 2
                <input placeholder="0" className="modal-item-price-input" />
                <input className="modal-item-price-input" />
              </div>
              <div className="modal-item-desc">
                Price 3
                <input placeholder="0" className="modal-item-price-input" />
                <input className="modal-item-price-input" />
              </div>
              <div className="modal-item-desc">
                Price 4
                <input placeholder="0" className="modal-item-price-input" />
                <input className="modal-item-price-input" />
              </div>
            </div>
            {/**/}
            <div className="modal-spacer"></div>
            <div className="modal-item-function">
              {/*Function select*/}
              <div className="modal-item-desc">
                Function*
                <select required className="modal-item-function-input">
                  <option value="" disabled selected defaultValue hidden>
                    Select function
                  </option>
                  <option className="modal-item-function-option" value="1">
                    1
                  </option>
                  <option className="modal-item-function-option" value="2">
                    2
                  </option>
                  <option className="modal-item-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              {/**/}
              {/*Group select*/}
              <div className="modal-item-desc">
                Group*
                <select required className="modal-item-function-input">
                  <option value="" disabled selected defaultValue hidden>
                    Select group
                  </option>
                  <option className="modal-item-function-option" value="1">
                    1
                  </option>
                  <option className="modal-item-function-option" value="2">
                    2
                  </option>
                  <option className="modal-item-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
            </div>
            {/**/}
            <div className="modal-item-price">
              {/*Other description field*/}
              <div className="modal-item-desc">
                Other Description
                <input
                  placeholder="Other description"
                  className="modal-item-desc-input"
                />
              </div>
              {/**/}
              {/*PDA field*/}
              <div className="modal-item-desc">
                PDA Description
                <input
                  placeholder="PDA description"
                  className="modal-item-desc-input"
                />
              </div>
              {/**/}
            </div>
            {/*Comments field*/}
            <div className="modal-item-desc">
              Comments On Menu
              <input
                placeholder="Comments on menu"
                className="modal-item-desc-input"
              />
            </div>
            {/**/}
            <div className="modal-item-subtitle">Print Out</div>
            <div className="modal-item-function">
              {/*Branch select*/}
              <div className="modal-item-desc">
                <select required className="modal-item-function-input">
                  <option value="" selected disabled defaultValue hidden>
                    Select branch
                  </option>
                  <option className="modal-item-function-option" value="1">
                    1
                  </option>
                  <option className="modal-item-function-option" value="2">
                    2
                  </option>
                  <option className="modal-item-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              {/**/}
              {/*Copy button*/}
              <div className="modal-item-branch">Copy All Branches</div>
            </div>
            {/**/}
            <div className="modal-spacer"></div>
            <div className="modal-item-price">
              {/*Print out select*/}
              <div className="modal-item-desc">
                Print Out 1
                <select required className="modal-item-print-input">
                  <option className="modal-item-function-option" value="1">
                    1
                  </option>
                  <option className="modal-item-function-option" value="2">
                    2
                  </option>
                  <option className="modal-item-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <div className="modal-item-desc">
                Print Out 2
                <select required className="modal-item-print-input">
                  <option className="modal-item-function-option" value="1">
                    1
                  </option>
                  <option className="modal-item-function-option" value="2">
                    2
                  </option>
                  <option className="modal-item-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              <div className="modal-item-desc">
                Print Out 3
                <select required className="modal-item-print-input">
                  <option className="modal-item-function-option" value="1">
                    1
                  </option>
                  <option className="modal-item-function-option" value="2">
                    2
                  </option>
                  <option className="modal-item-function-option" value="3">
                    3
                  </option>
                </select>
              </div>
              {/**/}
            </div>
            <div className="modal-item-subtitle">Modifiers</div>
            <div className="modal-item-price">
              {/*Mod 1*/}
              <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                Modifier 1
              </div>
              <select className="modal-item-function-input">
                <option
                  className="modal-item-function-option"
                  hidden
                  defaultValue
                  disabled
                  selected
                >
                  Null
                </option>
                <option className="modal-item-function-option" value="1">
                  1
                </option>
                <option className="modal-item-function-option" value="2">
                  2
                </option>
                <option className="modal-item-function-option" value="3">
                  3
                </option>
              </select>
              <input placeholder="0" className="modal-item-price-input" />
              <div className="modal-item-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Mandatory
              </div>
            </div>
            {/**/}
            <div className="modal-item-price">
              {/*Mod 2*/}
              <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                Modifier 2
              </div>
              <select className="modal-item-function-input">
                <option
                  className="modal-item-function-option"
                  hidden
                  defaultValue
                  disabled
                  selected
                  value=""
                >
                  Null
                </option>
                <option className="modal-item-function-option" value="1">
                  1
                </option>
                <option className="modal-item-function-option" value="2">
                  2
                </option>
                <option className="modal-item-function-option" value="3">
                  3
                </option>
              </select>
              <input placeholder="0" className="modal-item-price-input" />
              <div className="modal-item-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Mandatory
              </div>
            </div>
            {/**/}
            <div className="modal-item-price">
              {/*Mod 3*/}
              <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                Modifier 3
              </div>
              <select className="modal-item-function-input">
                <option
                  className="modal-item-function-option"
                  hidden
                  defaultValue
                  disabled
                  selected
                >
                  Null
                </option>
                <option className="modal-item-function-option" value="1">
                  1
                </option>
                <option className="modal-item-function-option" value="2">
                  2
                </option>
                <option className="modal-item-function-option" value="3">
                  3
                </option>
              </select>
              <input placeholder="0" className="modal-item-price-input" />
              <div className="modal-item-desc-hor">
                <input type="checkbox" className="modal-check"></input>
                Mandatory
              </div>
              {/**/}
            </div>
          </div>
          <div className="modal-item-footer">
            <input type="submit" value="Save" className="modal-item-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalItem;
