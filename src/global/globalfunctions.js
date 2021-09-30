


import Groups from "../models/Groups";
import Items from "../models/Items";
import Menu from "./globalvars";



export function fetchAllItems(customerId) {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/getAllItems"
    var item = Object.create(Items)
    item.mode = "R";
    item.Itemid = "0";
    item.cusotmerid = customerId;
    item.branchid = "1";
    item.categoryid = "0";
    item.nameEN = "";
    item.nameAR = "";
    item.descpt = "";
    item.sort = "0";
    item.prices = "0";
    item.images = "";
    item.search = "*"
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then((res) => res.json()).then((resJson) => {
        Menu.groupItems = resJson.data.Items.filter((item) => item.categoryid !== 0)
        // console.log(Menu.groupItems.filter((item) => item.categoryid !== 0))
    })


}


export function fetchAllGroups(customerId) {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/getAllGroups"
    var group = Object.create(Groups)
    group.mode = "R";
    group.cusotmerid = customerId;
    group.branchid = "1";
    group.categoryid = "0";
    group.nameEN = "";
    group.nameAR = "";
    group.descpt = "";
    group.sort = "0";
    group.images = "";
    group.search = "*"
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
    }).then((res) => res.json()).then((resJson) => {
        Menu.groupCategory = resJson.data.Groups
        //console.log(Menu.groupCategory)
    })


}

export const sendGroups = (customerId, nameEn, nameAr, descpt, sort) => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/sendGroup"
    var group = Object.create(Groups)
    group.mode = "w";
    group.cusotmerid = customerId;
    group.branchid = "1";
    group.categoryid = "0";
    group.nameEN = nameEn;
    group.nameAR = nameAr;
    group.descpt = descpt;
    group.sort = sort;
    group.images = "";
    group.search = ""
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
    }).then((res) => res.json()).then((resJson) => {
        fetchAllGroups(resJson.data.Groups[0].cusotmerid)
    })
}

export const deleteGroup = (customerId, nameEn, categoryid) => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/sendGroup"
    var group = Object.create(Groups)
    group.mode = "D";
    group.cusotmerid = customerId;
    group.branchid = "1";
    group.categoryid = categoryid;
    group.nameEN = nameEn;
    group.nameAR = "";
    group.descpt = "";
    group.sort = "";
    group.images = "";
    group.search = ""
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
    }).then((res) => res.json()).then((resJson) => {
        fetchAllGroups(resJson.data.Groups[0].cusotmerid)
    })
}
export const sendUpdatedGroup = (customerId, categoryId, nameEn, descpt, sort) => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/sendGroup"
    var group = Object.create(Groups)
    group.mode = "w";
    group.cusotmerid = customerId;
    group.branchid = "1";
    group.categoryid = categoryId;
    group.nameEN = nameEn;
    group.nameAR = nameEn;
    group.descpt = descpt;
    group.sort = sort;
    group.images = "";
    group.search = ""
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(group)
    }).then((res) => res.json()).then((resJson) => {
        fetchAllGroups(resJson.data.Groups[0].cusotmerid)
    })
}


export const sendItems = (customerId, categoryId, nameEn, nameAr, descpt, sort, price) => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/sendItem"
    var item = Object.create(Items)
    item.mode = "w";
    item.Itemid = "0";
    item.cusotmerid = customerId;
    item.branchid = "1";
    item.categoryid = categoryId;
    item.nameEN = nameEn;
    item.nameAR = nameAr;
    item.descpt = descpt;
    item.sort = sort;
    item.prices = price;
    item.images = "";
    item.search = ""
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then((res) => res.json()).then((resJson) => {
        // console.log(resJson)
        fetchAllItems(resJson.data.Items[0].cusotmerid)
    })
}

export const sendUpdatedItem = (customerId, categoryId, Itemid, nameEn, nameAr, descpt, sort, price) => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/sendItem"
    var item = Object.create(Items)
    item.mode = "w";
    item.Itemid = Itemid;
    item.cusotmerid = customerId;
    item.branchid = "1";
    item.categoryid = categoryId;
    item.nameEN = nameEn;
    item.nameAR = nameAr;
    item.descpt = descpt;
    item.sort = sort;
    item.prices = price;
    item.images = "";
    item.search = ""
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then((res) => res.json()).then((resJson) => {
        fetchAllItems(resJson.data.Items[0].cusotmerid)
    })
}

export const deleteItem = (Itemid, nameEn, customerId) => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/sendItem"
    var item = Object.create(Items)
    item.mode = "D";
    item.Itemid = Itemid;
    item.cusotmerid = customerId;
    item.branchid = "1";
    item.categoryid = "";
    item.nameEN = nameEn;
    item.nameAR = "";
    item.descpt = "";
    item.sort = "";
    item.prices = "";
    item.images = "";
    item.search = ""
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then((res) => res.json()).then((resJson) => {
        fetchAllItems(resJson.data.Items[0].cusotmerid)
    })
}



