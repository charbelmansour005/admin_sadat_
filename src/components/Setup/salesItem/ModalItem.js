import React, { useState, useEffect } from "react";
import "../../../styles/Items.css";
import CloseIcon from "@material-ui/icons/Close";
import moment from 'react-moment'
import { useDispatch, useSelector } from "react-redux";
const ModalItem = ({
  m,
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
  const [price, setPrice] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');
  const [price4, setPrice4] = useState('');
  const [func, setFunc] = useState("");
  const [group, setGroup] = useState("");
  const [otherDesc, setOtherDesc] = useState("");
  const [pdaDesc, setPdaDesc] = useState("");
  const [comments, setComments] = useState("");
  const [creationDate, setCreationDate] = useState('')
  const [modDate, setModDate] = useState('')
  const [modifiers, setModifiers] = useState([]);
  const { salesItems } = useSelector(
    (state) => state.postReducer
  );
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
  useEffect(() => {
    getCreatedDate()
    getModificationDate()
  }, []);
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
              salesItems.length + 1,
              menuDesc,
              kitchenDesc,
              price,
              price2,
              price3,
              price4,
              func,
              group,
              otherDesc,
              pdaDesc,
              comments,
              modifiers,
              creationDate,
              modDate
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

            <div className="modal-item-desc">
              Description*
              <input
                id="desc"
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Item description"
                className="modal-item-desc-input"
              />
            </div>

            <div className="modal-item-desc">
              Menu Description*
              <input
                onChange={(e) => setMenuDesc(e.target.value)}
                required
                placeholder="Menu description"
                className="modal-item-desc-input"
              />
            </div>

            <div className="modal-item-desc">
              Kitchen Description*
              <input
                onChange={(e) => setKitchenDesc(e.target.value)}
                required
                placeholder="Kitchen description"
                className="modal-item-desc-input"
              />
            </div>

            <div className="modal-spacer"></div>

            <div className="modal-item-price">
              <div className="modal-item-desc">
                Price 1
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0"
                  className="modal-item-price-input"
                />
                <input value={price} className="modal-item-price-input" />
              </div>
              <div className="modal-item-desc">
                Price 2

                <input onChange={(e) => setPrice2(e.target.value)} placeholder="0" className="modal-item-price-input" />
                <input value={price2} className="modal-item-price-input" />
              </div>
              <div className="modal-item-desc">
                Price 3
                <input onChange={(e) => setPrice3(e.target.value)} placeholder="0" className="modal-item-price-input" />
                <input value={price3} className="modal-item-price-input" />
              </div>
              <div className="modal-item-desc">
                Price 4
                <input onChange={(e) => setPrice4(e.target.value)} placeholder="0" className="modal-item-price-input" />
                <input value={price4} className="modal-item-price-input" />
              </div>
            </div>

            <div className="modal-spacer"></div>
            <div className="modal-item-function">

              <div className="modal-item-desc">
                Function*
                <select
                  onChange={(e) => setFunc(e.target.value)}
                  required
                  className="modal-item-function-input"
                  defaultValue={""}
                >
                  <option value="" disabled>
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

              <div className="modal-item-desc">
                Group*
                <select
                  onChange={(e) => setGroup(e.target.value)}
                  required
                  className="modal-item-function-input"
                  defaultValue={""}
                >
                  <option value="" disabled>
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

            <div className="modal-item-price">

              <div className="modal-item-desc">
                Other Description
                <input
                  onChange={(e) => setOtherDesc(e.target.value)}
                  placeholder="Other description"
                  className="modal-item-desc-input"
                />
              </div>

              <div className="modal-item-desc">
                PDA Description
                <input
                  onChange={(e) => setPdaDesc(e.target.value)}
                  placeholder="PDA description"
                  className="modal-item-desc-input"
                />
              </div>

            </div>

            <div className="modal-item-desc">
              Comments On Menu
              <input
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments on menu"
                className="modal-item-desc-input"
              />
            </div>

            <div className="modal-item-subtitle">Print Out</div>
            <div className="modal-item-function">

              <div className="modal-item-desc">
                <select defaultValue={""} className="modal-item-function-input">
                  <option value="" disabled>
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

              <div className="modal-item-branch">Copy All Branches</div>
            </div>

            <div className="modal-spacer"></div>
            <div className="modal-item-price">

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

            </div>
            <div className="modal-item-subtitle">Modifiers</div>
            <div className="modal-item-price">

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
                defaultValue={""}
                className="modal-item-function-input"
              >
                <option value="" disabled>
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

            <div className="modal-item-price">

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
                defaultValue={""}
                className="modal-item-function-input"
              >
                <option disabled value="">
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

            <div className="modal-item-price">

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
                defaultValue={""}
                className="modal-item-function-input"
              >
                <option disabled value="">
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
