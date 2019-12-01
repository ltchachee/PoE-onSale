// ==UserScript==
// @name         Poe On Sale Script
// @namespace    https://old.reddit.com/r/pathofexile/
// @version      0.1
// @description  Showing items that are on sale in the store for saving l00ts
// @author       You
// @match        https://www.pathofexile.com/shop/category/*
// @grant        none
// ==/UserScript==

var purchaseLink = document.getElementsByClassName("purchaseLink")[1];

var a = document.createElement("a");
a.setAttribute("class", "button-text red shopBuyMoreCoinsButton");
a.innerHTML = "On Sale Toggle";

purchaseLink.appendChild(a);

a.addEventListener ("click", function() {
  $(this).prop('disabled', true);

  $('.shopItemBase').filter(function() {
    return $(this).find('.onSaleIcon').length == 0;
  }).toggle();

  $(this).prop('disabled', false);
});