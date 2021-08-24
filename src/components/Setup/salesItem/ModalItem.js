import React, { useState } from "react";
import "../../../styles/Items.css";
import CloseIcon from "@material-ui/icons/Close";

const ModalItem = ({
  mod,
  mountedStyle,
  toggleClose,
  unmountedStyle,
  downStyle,
  upStyle,
  handleSubmit,
}) => {
  const [name, setName] = useState("");
  const [menuDesc, setMenuDesc] = useState("");
  const [kitchenDesc, setKitchenDesc] = useState("");
  const [price, setPrice] = useState();
  const [func, setFunc] = useState("");
  const [group, setGroup] = useState("");
  const [otherDesc, setOtherDesc] = useState("");
  const [pdaDesc, setPdaDesc] = useState("");
  const [comments, setComments] = useState("");
  const [modifiers, setModifiers] = useState([]);
  return (
    <div
      style={mod ? mountedStyle : unmountedStyle}
      className="modal-item-wrapper"
    >
      <div style={mod ? downStyle : upStyle} className="modal-item">
        <form
          className="modal-item-form"
          type="submit"
          onSubmit={(e) =>
            handleSubmit(
              e,
              name,
              menuDesc,
              kitchenDesc,
              price,
              func,
              group,
              otherDesc,
              pdaDesc,
              comments,
              modifiers
            )
          }
        >
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setMenuDesc(e.target.value)}
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
                onChange={(e) => setKitchenDesc(e.target.value)}
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
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0"
                  className="modal-item-price-input"
                />
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
                <select
                  onChange={(e) => setFunc(e.target.value)}
                  required
                  className="modal-item-function-input"
                  defaultValue={"Select function"}
                >
                  <option value="Select function" disabled>
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
                <select
                  onChange={(e) => setGroup(e.target.value)}
                  required
                  className="modal-item-function-input"
                  defaultValue={"Select group"}
                >
                  <option value="Select group" disabled>
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
                  onChange={(e) => setOtherDesc(e.target.value)}
                  placeholder="Other description"
                  className="modal-item-desc-input"
                />
              </div>
              {/**/}
              {/*PDA field*/}
              <div className="modal-item-desc">
                PDA Description
                <input
                  onChange={(e) => setPdaDesc(e.target.value)}
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
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments on menu"
                className="modal-item-desc-input"
              />
            </div>
            {/**/}
            <div className="modal-item-subtitle">Print Out</div>
            <div className="modal-item-function">
              {/*Branch select*/}
              <div className="modal-item-desc">
                <select
                  defaultValue={"Select branch"}
                  className="modal-item-function-input"
                >
                  <option value="Select branch" disabled>
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
                <select className="modal-item-print-input">
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
                <select className="modal-item-print-input">
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
                <select className="modal-item-print-input">
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
              <select
                onChange={(e) =>
                  setModifiers((prev) => {
                    let arr = prev;
                    arr[0] = e.target.value;
                    return arr;
                  })
                }
                defaultValue={"Null"}
                className="modal-item-function-input"
              >
                <option value="Null" disabled>
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
              <select
                onChange={(e) =>
                  setModifiers((prev) => {
                    let arr = prev;
                    arr[1] = e.target.value;
                    return arr;
                  })
                }
                defaultValue={"Null"}
                className="modal-item-function-input"
              >
                <option disabled value="Null">
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
              <select
                onChange={(e) =>
                  setModifiers((prev) => {
                    let arr = prev;
                    arr[2] = e.target.value;
                    return arr;
                  })
                }
                defaultValue={"Null"}
                className="modal-item-function-input"
              >
                <option disabled value="Null">
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
