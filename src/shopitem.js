"use strict";

function ShopItem(name, price, bps, game) {
    this.name = name;
    this.startPrice = price;
    this.price = price;
    this.bps = bps;
    this.count = 0;
    this.button = undefined;
    this.game = game;

    var shop = document.getElementById("upgrades_shop");
    var item = document.createElement("div");
    item.className = "shopItem";
    
    var title = document.createElement("h4");
    title.innerHTML = this.name;
    item.appendChild(title);
    
    var price_el = document.createElement("h5");
    var priceText = document.createElement("span");
    priceText.innerHTML = "Price: ";
    this.priceNum = document.createElement("span");
    this.priceNum.innerHTML = "" + this.price.toFixed(2);
    this.priceNum.id = this.name + "_Price";
    var priceBD = document.createElement("span");
    priceBD.innerHTML = " BD";
    price_el.appendChild(priceText);
    price_el.appendChild(this.priceNum);
    price_el.appendChild(priceBD);
    item.appendChild(price_el);
    
    var count_el = document.createElement("h5");
    var countText = document.createElement("span");
    countText.innerHTML = "Count: ";
    this.countNum = document.createElement("span");
    this.countNum.id = this.name + "_Count";
    this.countNum.innerHTML = "" + this.count;
    count_el.appendChild(countText);
    count_el.appendChild(this.countNum);
    item.appendChild(count_el);
    
    var bps_el = document.createElement("h5");
    var bps_text = document.createElement("span");
    bps_text.innerHTML = "Bps ";
    this.bpsNum = document.createElement("span");
    this.bpsNum.innerHTML = "" + this.bps;
    bps_el.appendChild(bps_text);
    bps_el.appendChild(this.bpsNum);
    item.appendChild(bps_el);
    
    this.button = document.createElement("button");
    this.button.className += "btn btn-success";
    this.button.innerHTML = "Buy!";
    this.button.id = this.name + "_Button";
    item.appendChild(this.button);
    
    shop.appendChild(item);
    
    this.load = function() {
        if(localStorage.getItem(name+"_Price")) {
            this.price = parseFloat(localStorage.getItem(name+"_Price"));
        }else {
            this.price = this.startPrice;
        }
        
        if(localStorage.getItem(name+"_Count")) {
            this.count = parseFloat(localStorage.getItem(name+"_Count"));
        }else {
            this.count = 0;
        }
    };
    
    this.updateText = function() {
        this.countNum.innerHTML = "" + this.count;
        this.priceNum.innerHTML = "" + this.price.toFixed(2);
    }
    
    this.reset = function() {
        this.count = 0;
        this.price = this.startPrice;
        this.save();
    };
    
    this.save = function() {
        localStorage.setItem(name+"_Price", "" + this.price);
        localStorage.setItem(name+"_Count", "" + this.count);
    };
    
    this.totalBps = function() {
        var ret = 0;
        for(var i = 0; i < this.count; i++) {
            ret += this.bps;
        }
        return ret;
    };
    
    this.add = function() {
        for(var i = 0; i < this.count; i++) {
            this.game.bananas += this.bps / 10;
        }
    };
    
    this.buy = function() {
        if(this.game.bd >= this.price) {
            this.game.bd -= this.price;
            this.count++;
            this.price *= 1.11;
        }
    };
}