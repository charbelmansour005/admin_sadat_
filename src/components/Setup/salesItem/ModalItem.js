import React, { useState, useEffect } from "react";
import "../../../styles/Items.css";
import CloseIcon from "@material-ui/icons/Close";

import { useDispatch, useSelector } from "react-redux";
import { itemAdd, itemRemove, itemAddOn } from '../../../data/modules'
import { addModifier, removeModifier, addOnModifier, clearAddMod, clearRemoveMod, clearAddOnMod } from "../../../redux/actions";
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
  const [print1, setPrint1] = useState('')
  const [print2, setPrint2] = useState('')
  const [print3, setPrint3] = useState('')
  const [func, setFunc] = useState("");
  const [group, setGroup] = useState("");
  const [otherDesc, setOtherDesc] = useState("");
  const [pdaDesc, setPdaDesc] = useState("");
  const [comments, setComments] = useState("");
  const [branch, setbranch] = useState("");
  const [creationDate, setCreationDate] = useState('')
  const [modDate, setModDate] = useState('')
  const [addMod, setAddMod] = useState('')
  const [addModPrice, setAddPrice] = useState('')
  const [isAddMand, setAddMand] = useState('')
  const [isRemoveMand, setRemoveMand] = useState('')
  const [isAddOnMand, setAddOnMand] = useState('')
  const [removeMod, setRemoveMod] = useState('')
  const [removeModPrice, setRemovePrice] = useState('')
  const [addOnMod, setAddOnMod] = useState('')
  const [addOnModPrice, setAddOnPrice] = useState('')


  const dispatch = useDispatch();
  const { salesItems, ItemAdd, ItemRemove, ItemAddOn } = useSelector(
    (state) => state.postReducer
  );
  const addModifiers = (item) => dispatch(addModifier(item));
  const removeModifiers = (item) => dispatch(removeModifier(item));
  const addOnModifiers = (item) => dispatch(addOnModifier(item));
  const clearAdd = () => dispatch(clearAddMod());
  const clearRemove = () => dispatch(clearRemoveMod());
  const clearAddOn = () => dispatch(clearAddOnMod());
  let getCreatedDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var completeDateFormat = date + "/" + month + "/" + year;
    setCreationDate(completeDateFormat)


  }
  let getModificationDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var completeDateFormat = date + "/" + month + "/" + year;

    setModDate(completeDateFormat)
  }
  useEffect(() => {
    getCreatedDate()
    getModificationDate()


  }, []);

  let pushModifiers = () => {

    var modAdd = Object.create(itemAdd)
    modAdd.specs = addMod
    modAdd.categ = "ADD"
    modAdd.descption = addMod
    modAdd.cmt = ''
    modAdd.price = addModPrice
    modAdd.isMand = isAddMand

    var modRemove = Object.create(itemRemove)
    modRemove.specs = removeMod
    modRemove.categ = "REMOVE"
    modRemove.descption = removeMod
    modRemove.cmt = ''
    modRemove.price = removeModPrice
    modRemove.isMand = isRemoveMand

    var modAddOn = Object.create(itemAddOn)
    modAddOn.specs = addOnMod
    modAddOn.categ = "ADDON"
    modAddOn.descption = addOnMod
    modAddOn.cmt = ''
    modAddOn.price = addOnModPrice
    modAddOn.isMand = isAddOnMand



    if (addMod === '') {
      clearAdd()
    }
    else {
      addModifiers(modAdd)
    }

    if (removeMod === '') {
      clearRemove()
    } else {
      removeModifiers(modRemove)
    }
    if (addOnMod === '') {
      clearAddOn()
    }
    else {
      addOnModifiers(modAddOn)
    }



    setAddMod('')
    setRemoveMod('')
    setAddOnMod('')


  }

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
              branch,
              print1,
              print2,
              print3,
              ItemAdd,
              ItemRemove,
              ItemAddOn,
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
                {/* <input value={price} className="modal-item-price-input" /> */}
              </div>
              <div className="modal-item-desc">
                Price 2

                <input onChange={(e) => setPrice2(e.target.value)} placeholder="0" className="modal-item-price-input" />
                {/* <input value={price2} className="modal-item-price-input" /> */}
              </div>
              <div className="modal-item-desc">
                Price 3
                <input onChange={(e) => setPrice3(e.target.value)} placeholder="0" className="modal-item-price-input" />
                {/* <input value={price3} className="modal-item-price-input" /> */}
              </div>
              <div className="modal-item-desc">
                Price 4
                <input onChange={(e) => setPrice4(e.target.value)} placeholder="0" className="modal-item-price-input" />
                {/* <input value={price4} className="modal-item-price-input" /> */}
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
                <select onChange={(e) => setbranch(e.target.value)} defaultValue={""} className="modal-item-function-input">
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
                <select defaultValue={""} onChange={(e) => setPrint1(e.target.value)} className="modal-item-print-input">
                  <option defaultValue selected value="" disabled>
                    Select Print 1
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
                Print Out 2
                <select defaultValue={""} onChange={(e) => setPrint2(e.target.value)} className="modal-item-print-input">
                  <option defaultValue selected value="" disabled>
                    Select Print 2
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
                Print Out 3
                <select defaultValue={""} onChange={(e) => setPrint3(e.target.value)} className="modal-item-print-input">
                  <option value="" selected defaultValue disabled>
                    Select Print 3
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
            <div className="modal-item-subtitle">Modifiers</div>
            <div className="modal-item-price">

              <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                Modifier 1
              </div>
              <select
                onChange={(e) => setAddMod(e.target.value)}
                defaultValue={""}
                className="modal-item-function-input"
              >
                <option value="" disabled defaultValue selected>
                  Select Add
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
              <input onChange={(e) => setAddPrice(e.target.value)} placeholder="0" className="modal-item-price-input" />
              <div className="modal-item-desc-hor">
                <input value="isMandantory" onChange={(e) => setAddMand(e.target.value)} type="checkbox" className="modal-check"></input>
                Mandatory
              </div>
            </div>

            <div className="modal-item-price">

              <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                Modifier 2
              </div>
              <select
                onChange={(e) => setRemoveMod(e.target.value)}
                defaultValue={""}
                className="modal-item-function-input"
              >
                <option selected defaultValue disabled value="">
                  Select Remove
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
              <input onChange={(e) => setRemovePrice(e.target.value)} placeholder="0" className="modal-item-price-input" />
              <div className="modal-item-desc-hor">
                <input value="isMandantory" onChange={(e) => setRemoveMand(e.target.value)} type="checkbox" className="modal-check"></input>
                Mandatory
              </div>
            </div>

            <div className="modal-item-price">

              <div className="modal-item-desc" style={{ paddingTop: "7px" }}>
                Modifier 3
              </div>
              <select
                onChange={(e) => setAddOnMod(e.target.value)}
                defaultValue={""}
                className="modal-item-function-input"
              >
                <option selected defaultValue disabled value="">
                  Select AddOn
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
              <input onChange={(e) => setAddOnPrice(e.target.value)} placeholder="0" className="modal-item-price-input" />
              <div className="modal-item-desc-hor">
                <input value="isMandantory" onChange={(e) => setAddOnMand(e.target.value)} type="checkbox" className="modal-check"></input>
                Mandatory
              </div>

            </div>
          </div>
          <div className="modal-item-footer">
            <input type="submit" value="Save" onClick={() => pushModifiers()} className="modal-item-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalItem;
