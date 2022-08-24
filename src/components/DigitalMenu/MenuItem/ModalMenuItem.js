import React, { useState, useEffect } from "react";
import "../../../styles/Digital.css";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Draggable from 'react-draggable'
import Menu from "../../../global/globalvars";
import Items from "../../../models/Items";
// ADDING A NEW ITEM

const ModalMenuItem = ({
    m,
    mod,
    mountedStyle,
    toggleClose,
    unmountedStyle,
    downStyle,
    upStyle,
    handleSubmit,
}) => {
    // const [itemName, setItemName] = useState("");
    // const [enName, setEnName] = useState('');
    // const [arName, setArName] = useState('');
    // const [itemPrice, setItemPrice] = useState("");
    // const [ingredients, setIngredients] = useState("");
    // const [categname, setCategname] = useState("");
    // const [branch, setBranch] = useState('')
    // const [imageSelected, setImageSelected] = useState(null)
    // const [sort, setSorting] = useState('')
    // const [file, setFile] = useState(null);
    // const { QRMenu, userInfo } = useSelector((state) => state.postReducer);
    var db = require('../../../global/globalfunctions')

        // const [uninameEN, setuiNameEN] = useState("");
        // const [uiprice, setUIprice] = useState("");
        // const [uicur, setUIcur] = useState("");

        const [uimode,setuiMode] = useState("");
        const [uicode,setuiCode] = useState("");
        const [uinameEN,setuiNameEN] = useState("");
        const [uinameAR,setuiNameAR] = useState("");
        const [uidescription,setuiDescription] = useState("");
        const [uiprice,setuiPrice] = useState("");
        const [uiCategory,setuiCategory] = useState("");
        const [uiRest,setuiRest] = useState("");


        // const [uicategory, setUIcategory] = useState("");
        

    useEffect(() => {

    }, []);


    // let resetForm = () => {
    //     document.getElementById("add-item-form").reset();
    //     setFile(null)
    //     toggleClose()
    // }
    // let postAll = (e) => {

    //     sendItems();
    //     uploadImage()
    //     handleSubmit(e);
    // }

    // const handleChange = (event) => {
    //     setImageSelected(event.target.files[0])
    //     setFile(URL.createObjectURL(event.target.files[0]))
    // }


    // let uploadImage = () => {
    //     if (imageSelected !== null) {
    //         const formData = new FormData();

    //         formData.append("file", imageSelected)
    //         fetch("http://localhost:5000/upload", {
    //             mode: "cors",
    //             method: "POST",
    //             body: formData
    //         }).then((response) => {
    //             console.log(response)
    //         })
    //     }

    // }
    
    // let sendItems = () => {
    //     const apiUrl = "http://localhost:3002/api/DigitalMenu/sendItem"
    //     var item = Object.create(Items)
    //     item.mode = "w";
    //     item.Itemid = "0";
    //     item.cusotmerid = userInfo.userid;
    //     item.branchid = "1";
    //     item.categoryid = groupId;
    //     item.nameEN = enName;
    //     item.nameAR = arName;
    //     item.descpt = ingredients;
    //     // item.sort = sort;
    //     item.prices = itemPrice;
    //     item.images = "";
    //     item.search = ""
    //     fetch(apiUrl, {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             Accept: "application/json",
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(item)
    //     }).then((res) => res.json()).then((resJson) => {
    //        Menu.groupItems=resJson.data.Items
    //        console.log(Menu.groupItems)
    //     })
    // }

    const options = Menu.groupCategory.map(option =>
        <option key={option.categoryid} value={option.categoryid}>{option.nameEN}</option>
    )

    // -------------------------------------------------MENU ITEMS---------------------------------------------------

    // const [ENName,setENName] = useState("");
    // const [ARName,setARName] = useState("");
    // const [Price,setPrice] = useState("");
    // const [Ingredients,setIngredients] = useState("");
    // 

    const handleClick = async () => {
        console.log("API CALL ENTERED")
          try { 
            await fetch('http://192.34.109.55/BlaseExtra/Api/QRGELLALL', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                mode: "I",
                code: uicode, 
                nameEN: uinameEN,
                nameAR: uinameAR,
                description: uidescription,
                price: uiprice,
                category: uiCategory,
                rest: uiRest,
              }),
            }).then(response => response.json())
              .then(async responseJson => {
                console.log(responseJson)

    
                if (responseJson.status === "OK") {

                  console.log('Item added! Response 200')
                } else {
                  console.log('Response is not 200')
                }
              })
          } catch (error) {
            console.log(error);
          }

      }

    // -------------------------------------------------------------------------------------------------------------
    return (

        <div
            style={mod ? mountedStyle : unmountedStyle}
            className="modal-item-Digital-wrapper">
            <div style={mod ? downStyle : upStyle} className="modal-Digital-item">
                <form
                    id="add-item-form"
                    className="modal-item-form"
                    type="submit"
                    // onSubmit={(e) =>
                    //     postAll(e)
                    // }

                    // onSubmit={() => handleClick()}
                > 
                    <div className="modal-item-Digital-header">
                        Add New Category Item
                        {/* <div onClick={() => resetForm()}>
                            <CloseIcon className="modal-item-Digital-close" />
                        </div> */}
                    </div>
                    <div className="modal-item-Digital-body">

                        <div className="modal-item-Digital-desc">
                            EN Name*
                            <input
                                id="desc"
                                onChange={uinameEN => setuiNameEN(uinameEN)}
                                defaultValue={uinameEN}
                                required
                                placeholder="Item Name"
                                className="modal-item-desc-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            Name AR
                            <input
                                onChange={uinameAR => setuiNameAR(uinameAR)}
                                defaultValue={uinameAR}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>

                        {/* <div className="modal-item-Digital-desc">
                            AR Name
                            <input
                                id="desc"
                                onChange={(e) => setArName(e.target.value)}
                                required
                                placeholder="AR Name"
                                className="modal-item-desc-input"
                            />
                        </div> */}
                        <div className="modal-item-Digital-desc">
                            Price*
                            <input
                                type="number"
                                onChange={uiprice => setuiPrice(uiprice)}
                                defaultValue={uiprice}
                                required
                                placeholder="price"
                                className="modal-item-desc-input"
                            />
                        </div>

                        <div className="modal-item-Digital-desc">
                            Description
                            <input
                                onChange={uidescription => setuiDescription(uidescription)}
                                defaultValue={uidescription}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            Categ
                            <input
                                onChange={uiCategory => setuiCategory(uiCategory)}
                                defaultValue={uiCategory}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            {/* Mode */}
                            <input
                                onChange={uimode => setuiMode(uimode)}
                                defaultValue={uimode}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                                hidden={true}
                            />
                        </div>
                        <div className="modal-item-Digital-desc">
                            {/* Rest */}
                            <input
                                onChange={uiRest => setuiRest(uiRest)}
                                defaultValue={uiRest}
                                placeholder="ingredients"
                                className="modal-item-desc-Digital-input"
                                hidden={true}
                            />
                        </div>
                        {/* <div className="modal-item-Digital-desc">
                        Category Name*

                            <select
                                onChange={uicategory => setUIcategory(uicategory)}
                                required
                                className="modal-item-function-input"
                                defaultValue={""}
                            >
                                <option value="" disabled>
                                    Select Category Name
                                </option>
                                {options}
                            </select>
                        </div> */}

                        {/* <div className="modal-item-Digital-desc">
                            sorting
                            <input
                                type="number"
                                onChange={(e) => setSorting(e.target.value)}
                                placeholder="sorting"
                                className="modal-item-price-Digital-input"
                            />

                        </div> */}
                        {/* <div className="modal-item-Digital-desc">
                            branch *
                            <select
                                onChange={(e) => setBranch(e.target.value)}
                                required
                                className="modal-item-function-input"
                                defaultValue={""}
                            >
                                <option value="" disabled>
                                    Select Branch
                                </option>
                                <option value="kousba">
                                    kousba
                                </option>
                                <option value="Amioun">
                                    Amioun
                                </option>
                                <option value="beirut">
                                    beirut
                                </option>
                            </select>
                        </div> */}

                        {/* <div className="item-right">
                            <label className="item-file-input">
                                Choose Image
                                <input
                                    name="file" type="file" accept="image/*" onChange={handleChange}
                                />
                            </label>
                        </div> */}

                        {/* {
                            file !== null ? <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>
                                <img width={300} height={300} src={file}></img>
                            </div> : null
                        } */}


                        <div className="modal-spacer"></div>



                    </div>
                    <div className="modal-item-Digital-footer">
                        <input
                            type="submit"
                            value="Save"
                            className="modal-item-save"
                            onClick={() => handleClick()}
                        />
                    </div>
                </form>
            </div>
        </div>
        // </Draggable>
    );
};

export default ModalMenuItem;
