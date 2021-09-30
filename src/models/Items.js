class Items {
    constructor(mode, Itemid, cusotmerid, branchid, categoryid, nameEN, nameAR, descpt, prices, sort, images, search) {
        this.mode = mode;
        this.Itemid = Itemid;
        this.cusotmerid = cusotmerid;
        this.branchid = branchid;
        this.categoryid = categoryid;
        this.nameEN = nameEN;
        this.nameAR = nameAR;
        this.descpt = descpt;
        this.sort = sort;
        this.images = images
        this.search = search;
    }
}
module.exports = Items;