import React, { useEffect, useState } from "react";

import "../../../styles/Categories.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const ModalCategory = ({ mod, mountedStyle, toggleClose, downStyle, unmountedStyle, upStyle, handleSubmit }) => {

  const { catItem } = useSelector(
    (state) => state.postReducer
  );
  const [pDefinedCat, setPDefinedCat] = useState('')
  const [catName, setCatName] = useState('')
  const [othername, setOtherName] = useState('')
  const [sorting, setSorting] = useState('')
  const [creationDate, setCreationDate] = useState('')
  const [modDate, setModDate] = useState('')
  const [predefined,setPredefined]=useState('Select predefined category')

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
    document.getElementById("add-category-form").reset()
    setPDefinedCat('')


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
    <div style={mod ? mountedStyle : unmountedStyle} className="modal-cat-wrapper">
      <div style={mod ? downStyle : upStyle} className="modal-cat">
        <form id="add-category-form" className="modal-cat-form" type="submit" onSubmit={(e) =>
          handleSubmit(
            e,
            uuidv4(),
            pDefinedCat,
            catName,
            othername,
            sorting,
            creationDate,
            modDate
          )
        } >
          <div className="modal-cat-header">
            Add New Category
            <div onClick={() => resetForm()}>
              <CloseIcon className="modal-cat-close" />
            </div>
          </div>
          <div className="modal-cat-body">
            <div className="modal-cat-subtitle">General</div>
            <div id="predefined-category" className="modal-cat-desc">
              Predefined Categories
              <select 
              defaultValue={predefined}
              onChange={(e) => setPDefinedCat(e.target.value)} 
              className="modal-item-function-input">
        
                <option
                value="Select predefined category"
                  className="modal-item-function-option" 
                  disabled
                
                >
                  {predefined}
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
            <div className="modal-spacer"></div>
            <div className="modal-cat-desc">
              Category*
              <input
                onChange={(e) => setCatName(e.target.value)}
                required
                placeholder="Category name"
                className="modal-cat-desc-input"
              />
            </div>
            <div className="modal-cat-desc">
              Other name*
              <input
                onChange={(e) => setOtherName(e.target.value)}
                required
                placeholder="Other name"
                className="modal-cat-desc-input"
              />
            </div>
            <div className="modal-cat-desc">
              Sorting*
              <input
                onChange={(e) => setSorting(e.target.value)}
                required
                placeholder="Sorting"
                className="modal-cat-desc-input"
              />
            </div>
          </div>
          <div className="modal-cat-footer">
            <input type="submit" value="Save" className="modal-cat-save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCategory;
