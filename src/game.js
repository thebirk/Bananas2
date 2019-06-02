"use strict";

function Game() {
    this.bananas = 0;
    this.bpc = 1;
    this.bd = 0;
    
    this.bananaImg = undefined;
    this.bananText = undefined;
    
    this.bananasText = undefined;
    this.bpsText = undefined;
    this.bpcText = undefined;
    this.bdText = undefined;
    
    this.buyBDButton = undefined;
    this.numBD = undefined;
    
    this.shopItems = [];
    
    this.init = function() {
        this.bananaImg = document.getElementById("bananaImg");
        this.bananText = document.getElementById("bananText");
        
        this.bananasText = document.getElementById("bananasText");
        this.bpsText = document.getElementById("bpsText");
        this.bpcText = document.getElementById("bpcText");
        this.bdText = document.getElementById("bdText");
        
        this.buyBDButton = document.getElementById("buyBD");
        this.numBD = document.getElementById("numBD");
        
        this.shopItems.push(new ShopItem("Slave", 1, 0.2, this));
        this.shopItems.push(new ShopItem("Monkey", 10, 1.2, this));
        this.shopItems.push(new ShopItem("Plantation", 50, 5, this));
        this.shopItems.push(new ShopItem("Banana-Forest", 250, 15, this));
        this.shopItems.push(new ShopItem("Banana-Factory", 1000, 50, this));
        this.shopItems.push(new ShopItem("Banana-Portal", 5000, 100, this));
        this.shopItems.push(new ShopItem("Bananaverse", 10000, 200, this));
        this.shopItems.push(new ShopItem("Quantum-Banana-Generator", 50000, 500, this));
        this.shopItems.push(new ShopItem("Dark-Banana-Matter", 100000, 1000, this));
        
        for(var i = 0; i < this.shopItems.length; i++) {
            this.shopItems[i].load();
        }
        
        if(localStorage.bananas) {
            this.bananas = parseFloat(localStorage.bananas);
        }
        if(localStorage.bpc) {
            this.bpc = parseFloat(localStorage.bpc);
        }
        if(localStorage.bd) {
            this.bd = parseFloat(localStorage.bd);
        }
    }
    
    this.bananClicked = function() {
        this.bananas += this.bpc;
    };
    
    this.buyBD = function() {
        var bds = parseInt(this.numBD.value);
        if(bds <= 0) return;
        
        var price = bds * 10;
        if(this.bananas >= price) {
            this.bananas -= price;
            this.bd += bds;
        }
    };
}