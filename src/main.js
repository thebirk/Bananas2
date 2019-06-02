"use strict";

var game = new Game();

function main() {
    game.init();
    
    game.bananaImg.addEventListener("click", function() {
        game.bananaImg.className = "bananaAnimClass";
        game.bananText.className = "bananAnimClass";
        game.bananClicked();
    });
    game.bananText.addEventListener("click", function() {
        game.bananaImg.className = "bananaAnimClass";
        game.bananText.className = "bananAnimClass";
        game.bananClicked();
    });
 
    game.buyBDButton.addEventListener("click", function() {
        game.buyBD();
    });
    
    game.bananText.addEventListener("animationend", function() {
        game.bananText.className = "";
    });
    
    game.bananaImg.addEventListener("animationend", function() {
       game.bananaImg.className = ""; 
    });
    
    for(var i = 0; i < game.shopItems.length; i++) {
        game.shopItems[i].button.addEventListener("click", function() {
            for(var i = 0; i < game.shopItems.length; i++) {
                if(game.shopItems[i].name+"_Button" == this.id) {
                    game.shopItems[i].buy();
                }
            }
        });
    }
    
    document.getElementById("resetButton").addEventListener("click", function() {
        if(window.confirm("Are you sure you want to rest?")) {
            for(var i = 0; i < game.shopItems.length; i++) {
                game.shopItems[i].reset();
            }
            
            game.bananas = 0;
            game.bpc = 1;
            game.bd = 0;
        }
    });
    
    setInterval(function() {
        game.bananasText.innerHTML = "" + game.bananas.toFixed(2);
        game.bananText.innerHTML = "+" + game.bpc.toFixed(2);
        game.bdText.innerHTML = "" + game.bd.toFixed(2);
        game.bpcText.innerHTML = "" + game.bpc.toFixed(2);
        
        var bps = 0;
        for(var i = 0; i < game.shopItems.length; i++) {
            bps += game.shopItems[i].totalBps();
            game.shopItems[i].updateText();
        }
        game.bpsText.innerHTML = "" + bps.toFixed(2);
    }, 100);
    
    setInterval(function() {
        for(var i = 0; i < game.shopItems.length; i++) {
            game.shopItems[i].add(game);   
        }
    }, 100);
    
    setInterval(function() {
        for(var i = 0; i < game.shopItems.length; i++) {
            game.shopItems[i].save();   
        }
        
        localStorage.bananas = game.bananas;
        localStorage.bpc = game.bpc;
        localStorage.bd = game.bd;
    }, 100);
}
