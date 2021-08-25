import React,{useEffect,useState} from "react";
 
import "../../../styles/Categories.css";
import CloseIcon from "@material-ui/icons/Close";

const ModalCategory = ({ mod, mountedStyle, toggleClose, downStyle, unmountedStyle, upStyle,props }) => {
  useEffect(() => {

  }, []);
  return (
    <div style={mod ? mountedStyle : unmountedStyle} className="modal-cat-wrapper">
      <div style={mod ? downStyle : upStyle} className="modal-cat">
        <form className="modal-cat-form" type="submit">
          <div className="modal-cat-header">
            Add New Category
            <div onClick={() => toggleClose()}>
              <CloseIcon className="modal-cat-close" />
            </div>
          </div>
          <div className="modal-cat-body">
            <div className="modal-cat-subtitle">General</div>
            <div className="modal-cat-desc">
              Predefined Categories
              <select className="modal-item-function-input">
                <option
                  className="modal-item-function-option"
                  hidden
                  defaultValue
                  disabled
                  selected
                  value=""
                >
                  Select predefined category
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
                required
                placeholder="Category name"
                className="modal-cat-desc-input"
              />
            </div>
            <div className="modal-cat-desc">
              Other name*
              <input
                required
                placeholder="Other name"
                className="modal-cat-desc-input"
              />
            </div>
            <div className="modal-cat-desc">
              Sorting*
              <input
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
